import { concat } from 'rxjs'
import { combineEpics, ActionsObservable } from 'redux-observable'
import { FETCH_, dataTypes } from '../actions/constants'
import { dataLoading, dataLoadingFailed } from '../actions'
import { switchMap } from 'rxjs/operators'
import { nullFilter, dataLoadedSwitchMap } from '../utils/rxOperators'

const rootUrl = '/api'
const query = (object) => `${rootUrl}/${encodeURIComponent(object)}`
const actionsArray = Object.keys(dataTypes).map(key => FETCH_ + key)
export function fetchEpic(action$, store, {ajax}){
	return action$.ofType(...actionsArray).pipe(
		switchMap(({type, payload}) => {
			const dataObject = type.split('_').reverse()[0] // for FETCH_ actions, data object is last
			const loading = ActionsObservable.of(dataLoading(dataObject, true))
			const request = ajax.getJSON(query(dataObject.toLowerCase())).pipe(
				nullFilter, // want to do something other than end the stream here... Fire an "unsuccessful" action?
				dataLoadedSwitchMap(dataObject)
			)
				// .catch(err => {
				// 	// let message = err.response.errorMessage
				// 	return ActionsObservable.of(dataLoadingFailed(err))
				// })

			const doneLoading = ActionsObservable.of(dataLoading(dataObject, false))
              
			return concat(
				loading,
				request,
				doneLoading
			)
		})
	)
}

export const rootEpic = combineEpics(fetchEpic)