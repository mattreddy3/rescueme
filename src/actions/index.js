import { _LOADING, _LOADED, _LOADING_FAILED, FETCH_, DATA, dataTypes } from './constants'
// ACTION CREATORS
const isValidDataType = (dataType) => {
	return dataTypes.hasOwnProperty(dataType)
}
/**
 * 
 * @param {number} id 
 */
export function fetchData(dataType = DATA, options = {}){
	if (!isValidDataType(dataType)) return 'Not valid data type'
	return {
		type: FETCH_ + dataType,
		payload:{
			options
		}
	}
}

export function dataLoading(dataType = DATA, loading){
	if (!isValidDataType(dataType)) return 'Not valid data type'
	return {
		type: dataType + _LOADING,
		payload: loading
	}
}

export function dataLoaded(dataType, data){
	if (!isValidDataType(dataType)) return 'Not valid data type'
	return{
		type: dataType + _LOADED,
		payload: data,
		meta: {
		}
	}
}

export function dataLoadingFailed(dataType, message){
	if (!isValidDataType(dataType)) return 'Not valid data type'
	return{
		type:dataType + _LOADING_FAILED,
		payload:message
	}
}