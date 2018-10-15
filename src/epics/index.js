import { concat } from 'rxjs'
import { combineEpics, ActionsObservable } from 'redux-observable'
import { FETCH_, dataTypes } from '../actions/constants'
import { dataLoading, dataLoadingFailed, getMockData, dataLoaded } from '../actions'
import { mergeMap, switchMap, catchError } from 'rxjs/operators'
import { nullFilter, dataLoadedSwitchMap } from '../utils/rxOperators'
const env = process.env.NODE_ENV
const isDev = env === 'development'

const rootUrl = '/api'
const query = (object) => `${rootUrl}/${encodeURIComponent(object)}`
const actionsArray = Object.keys(dataTypes).map(key => FETCH_ + key)
export function fetchEpic(action$, store, {ajax}){
	return action$.ofType(...actionsArray).pipe(
		switchMap(({type, payload}) => {
			const dataObject = type.split('_').reverse()[0] // for FETCH_ actions, data object is last
			const loading = ActionsObservable.of(dataLoading(dataObject, true))
			const request = ajax.getJSON(query(dataObject.toLowerCase())).pipe(
				nullFilter,
				dataLoadedSwitchMap(dataObject),
				catchError(e => ActionsObservable.of(dataLoadingFailed(dataObject, e)))
			)
			const testRequest = ActionsObservable.of(getMockData(dataObject)).pipe(
				switchMap(res => ActionsObservable.of(dataLoaded(dataObject, res.payload)))
			)
			const doneLoading = ActionsObservable.of(dataLoading(dataObject, false))
			if(isDev){
				return concat(
					loading,
					testRequest,
					doneLoading
				)
			}
			return concat(
				loading,
				request,
				doneLoading
			)
		})
	)
}

export const rootEpic = combineEpics(fetchEpic)