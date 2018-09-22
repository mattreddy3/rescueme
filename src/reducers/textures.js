/**
 *  textures reducer
 */

// Import Action Types
import {
    CREATE_TEXTURE,
    FETCH_TEXTURES,
    DELETE_TEXTURE,
    CLEAR_CURRENT_TEXTURE,
    UPDATE_CURRENT_TEXTURE,
    TEXTURE_SAVED,
    TEXTURE_SAVING,
    TEXTURES_LOADED,
    TEXTURES_LOADING,
    TEXTURES_LOADING_FAILED,
    UPDATE_TEXTURE,
    ASSIGN_TEXTURE,
    UNASSIGN_TEXTURE
} from '../actions/constants';
  
  const initialCurrentTexture = {
      id:0,
      title:"",
      image: ""
  }
  
  const initialState = {
  
    list:[
      {
        id:0,
        title: "wood",
        image: ""
      },
      {
          id:1,
          title: "metal",
          image: ""
      },
    ],
    currentTexture:initialCurrentTexture,
    loading: false,
    saving: false,
  
  }
  
  function textures(state = initialState, action) {
    switch (action.type) {
      case CREATE_TEXTURE:
        return {
          ...state,
          list: state.list.concat(action.payload),
          currentTexture: initialCurrentTexture
        };
      case FETCH_TEXTURES:
        let list = action.payload
        if(typeof action.payload === "object"){
          list = [action.payload]
        }
        return {
          ...state,
          list: list
        };
      case DELETE_TEXTURE:
        return {
          ...state,
          list: state.list.filter(p => p.id !== action.payload )
        };
      case CLEAR_CURRENT_TEXTURE:
        return{
          ...state,
          currentTexture: initialCurrentTexture
        }
      case UPDATE_CURRENT_TEXTURE:
        return{
          ...state,
          currentTexture: action.payload
        }
      case UPDATE_TEXTURE:
        return state;
      case ASSIGN_TEXTURE:
        return state;
      case UNASSIGN_TEXTURE:
        return state;
      case TEXTURES_LOADED:
        return {
          ...state,
          list: action.payload
        };
      case TEXTURES_LOADING:
        return {
          ...state,
          loading: action.payload
        };
      case TEXTURES_LOADING_FAILED:
        return{
          ...state,
          message:action.payload
        }
      case TEXTURE_SAVED:
        return {
          ...state
        };
      case TEXTURE_SAVING:
        return {
          ...state,
          saving: action.payload
        };
      default:
        return state;
    }
  }
  
  export default textures;
  