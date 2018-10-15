/**
 *  animals reducer
 */

// Import Action Types
import {
	FETCH_,
	CLEAR_CURRENT_,
	UPDATE_CURRENT_,
	UPDATE_,
	DELETE_,
	ASSIGN_,
	GET_MOCK_,
	UNASSIGN_,
	CREATE_,
	// INSERT_,
	_LOADED,
	_LOADING,
	_LOADING_FAILED,
	_SAVED,
	_SAVING,
	ANIMALS
} from '../actions/constants'

const initialCurrentAnimal = {
	id: 0,
	name:'',
	species:'',
	color:'',
	birthMonth:1,
	birthYear:2018
}

const initialState = {

	list: [
	],
	currentAnimal: initialCurrentAnimal,
	loading: false,
	saving: false,

}

function animals(state = initialState, action) {
	switch (action.type) {
	case CREATE_ + ANIMALS:
		return {
			...state,
			list: state.list.concat(action.payload),
			currentAnimal: initialCurrentAnimal
		}
	case FETCH_ + ANIMALS:
		return {
			...state,
		}
	case DELETE_ + ANIMALS:
		return {
			...state,
			list: state.list.filter(p => p.id !== action.payload)
		}
	case CLEAR_CURRENT_ + ANIMALS:
		return {
			...state,
			currentAnimal: initialCurrentAnimal
		}
	case UPDATE_CURRENT_ + ANIMALS:
		return {
			...state,
			currentAnimal: action.payload
		}
	case UPDATE_ + ANIMALS:
		return state
	case ASSIGN_ + ANIMALS:
		return state
	case UNASSIGN_ + ANIMALS:
		return state
	case ANIMALS + _LOADED:
		return {
			...state,
			list: action.payload
		}
	case ANIMALS + _LOADING:
		return {
			...state,
			loading: action.payload
		}
	case ANIMALS + _LOADING_FAILED:
		return {
			...state,
			message: action.payload
		}
	case ANIMALS + _SAVED:
		return {
			...state
		}
	case ANIMALS + _SAVING:
		return {
			...state,
			saving: action.payload
		}
	default:
		return state
	}
}

export default animals