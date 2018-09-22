import {FETCH_TEXTURES, TEXTURES_LOADING, TEXTURES_LOADED, TEXTURES_LOADING_FAILED} from './constants';
// ACTION CREATORS

/**
 * 
 * @param {number} id 
 */
export function fetchTextures(id){
    return {
        type:FETCH_TEXTURES,
        payload:id 
    }
}

export function texturesLoading(loading){
    return {
        type: TEXTURES_LOADING,
        payload: loading
    }
}

export function texturesLoaded(textures){
    return{
        type: TEXTURES_LOADED,
        payload: textures
    }
}

export function texturesLoadingFailed(message){
    return{
        type:TEXTURES_LOADING_FAILED,
        payload:message
    }
}