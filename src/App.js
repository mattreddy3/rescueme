import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Main from './components/Main';

function mapStateToProps(state, ownProps){
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
