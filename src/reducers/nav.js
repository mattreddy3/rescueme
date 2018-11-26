
import {
  FETCH_,
  _DETAIL_OPTIONS,
  ANIMALS
} from '../actions/constants'

import Updates from '../components/Updates'
import Photos from '../components/Photos'
import Log from '../components/Log'
import Animals from '../components/Animals'
import Shelters from '../components/Shelters'
import Vets from '../components/Vets'

const initialState = {
  animalOptions:{
    1:{
      id:1,
      title:'Updates',
      component:Updates
    },
    2:{
      id:2,
      title:'Photos',
      component:Photos
    },
    3:{
      id:3,
      title:'Log',
      component:Log
    }
  },
  appOptions:{
    1:{
      id:1,
      title:'Animals',
      component:Animals
    },
    2:{
      id:2,
      title:'Vets',
      component:Vets
    },
    3:{
      id:3,
      title:'Shelters',
      component:Shelters
    }
  }
}

function nav(state = initialState, action) {
  switch(action.type){
    // case FETCH_+ANIMALS+_DETAIL_OPTIONS:
    //   return {
    //     ...state
    //   }
    default:
      return state
  }
}
export default nav
