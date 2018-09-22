import {Observable} from 'rxjs';
import {VirtualTimeScheduler} from 'rxjs/scheduler/VirtualTimeScheduler';
import {sessionLogin} from '../actions/index';
import {configureStore} from "../configureStore";

it('should authenticate', function(){
    const scheduler = new VirtualTimeScheduler()
    const deps = {
        scheduler,
        ajax:{
            
        }
    }
    const action = sessionLogin("test","test")
    const store = configureStore(deps)
    store.dispatch(action)    
    scheduler.flush()
    expect(store.getState().app.session.isAuthenticated).toBe(true)
})
//
// it('should perform a search (redux)', function () {
//
//   const scheduler = new VirtualTimeScheduler();
//   const deps = {
//     scheduler,
//     ajax: {
//       getJSON: () => Observable.of([{name: 'shane'}])
//     }
//   };
// 
//   const store = configureStore(deps);
//
//   const action = searchBeers('shane');
//
//   store.dispatch(action);
//
//   scheduler.flush();
//
//   expect(store.getState().beers.length).toBe(1);
// });
//
