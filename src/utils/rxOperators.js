import { filter, switchMap } from 'rxjs/operators'
import { ActionsObservable } from 'redux-observable'
import { dataLoaded } from '../actions'

export const nullFilter = filter(x => x!==null)
export const dataLoadedSwitchMap = dataObject => (switchMap(res => (
	ActionsObservable.of(dataLoaded(dataObject, res))
)))