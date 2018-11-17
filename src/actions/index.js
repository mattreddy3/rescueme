import { _LOADING, _LOADED, _LOADING_FAILED, FETCH_, DATA, GET_MOCK_, ANIMALS, dataTypes } from './constants'
import mockServer from '../mockserver'
// ACTION CREATORS
const isValidDataType = (dataType) => {
	return dataTypes.hasOwnProperty(dataType)
}

const queryMockServer = (dataType) => {
	switch(dataType){
	case ANIMALS:
		return mockServer.animalsList
	default:
		return []
	}
}

export function fetchData(dataType = DATA, options = {}){
	if (!isValidDataType(dataType)) return 'Not valid data type'
	return {
		type: FETCH_ + dataType,
		payload:{
			options
		}
	}
}

export function getMockData(dataType = DATA){
	if (!isValidDataType(dataType)) return 'Not valid data type'
	return {
		type: GET_MOCK_+dataType,
		payload:queryMockServer(dataType)
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

export function dataLoadingFailed(dataType, message = 'Loading failed'){
	if (!isValidDataType(dataType)) return 'Not valid data type'
	return{
		type:dataType + _LOADING_FAILED,
		payload:message
	}
}