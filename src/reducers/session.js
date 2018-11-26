
import {
  SESSION_AUTHENTICATED,
  SESSION_AUTHENTICATING,
  AUTHENTICATION_FAILED
} from '../actions/constants'

const initialState = {
  isAuthenticated:true, //TODO: THIS IS TEMPORARY!
  user:{},
  message:"",
  authenticating:false,
  redirectToReferrer:false
}

function hasToken() {
  const user = localStorage.getItem("User")
  return user ?
  {
      user:JSON.parse(user),
      isAuthenticated:true,
      authenticating:true,
      redirectToReferrer:true
  }:initialState

}

function session(state = hasToken(), action) {
  switch(action.type){
    case SESSION_AUTHENTICATED:
    case SESSION_AUTHENTICATING:
      return {
        ...state
      }
    default:
      return state
  }
}
export default session
