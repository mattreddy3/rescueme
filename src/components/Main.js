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
import Footer from './Footer'
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
  flex: 1 1 auto;
  display:flex;
  justify-content:center;
  width: calc(100% - 20px);
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
          <Content>
            
          </Content>
          <Footer />
        </div>
      );
    }
  }
export default Main;
