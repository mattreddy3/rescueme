import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {FETCH_TEXTURES} from '../actions/constants';
import {texturesLoading, texturesLoaded, texturesLoadingFailed} from '../actions';
import { map, filter, switchMap } from 'rxjs/operators';

const widgets = `localhost:3001/api/widgets`;
const query = (term) => `${widgets}/${encodeURIComponent(term)}`;

export function texturesEpic(action$, store, {ajax}){
    return action$.ofType(FETCH_TEXTURES).pipe(
        switchMap(({payload}) => {
          const loading = Observable.of(texturesLoading(true));
          const request = ajax.getJSON(query(payload)).pipe(
            filter(x => 
            {
              return x!==null
            }), // want to do something other than end the stream here... Fire an "unsuccessful" action?
            switchMap(res => {
              // can insert data mapping rules here
              
              return Observable.of(texturesLoaded(res))
            })
          )
          .catch(err => {
            let message = err.response.errorMessage
            return Observable.of(texturesLoadingFailed(err))
          });

          const doneLoading = Observable.of(texturesLoading(false));
              
          return Observable.concat(
            loading,
            request,
            doneLoading
          )
        })
    )
  }

  export const rootEpic = combineEpics(texturesEpic);