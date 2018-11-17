import React, {Component} from 'react';
// import Header from './Header';
// import Content from './Content';
import theme from '../styles/themes'
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import {ANIMALS, TOGGLE_SIDENAV} from '../actions/constants'
import {Icon, Button } from '../controls'
import CarouselList from './CarouselList'
import Header from './Header'
const AuthRoute = ({component:Component, ...props}) =>
{
  let {isAuthenticated} = props.session
  return (
    <Route {...props} render={(props)=>(
      isAuthenticated ? 
        <Component {...props} /> : 
        <Redirect to={{
          pathname:'/login',
          state: {from: props.location}
        }}/>
    )}/>
  )
}
const Content = styled.main`
  flex: 8;
  height:100%;
  background-color: ${theme.primaryColor};
  margin:none;
  min-height: 100vh;
  top:4em;
`;
class Main extends Component {
    state = {
      response:""
    }
    componentDidMount() {
      this.props.fetchData(ANIMALS)
    }
    render() {
      let { animals } = this.props.app
      return (
        <div className="container">
          <Header />
          <div className="content">
          {animals.loading ? <Icon pulse={true} icon="spinner"/>
          :animals.list.length > 0 ? 
            <CarouselList
              items={animals.list}
              >
            </CarouselList>
            : <p>Couldn't load anything</p>}
          </div>
          <div className="footer">
            <div className="labelButton">
              Option 1
            </div>
            <div className="labelButton">
              Option 2
            </div>
            <div className="labelButton">
              Option 3
            </div>
          </div>
        </div>
      );
    }
  }
export default Main;