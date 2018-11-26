import React, {Component} from 'react';
// import Header from './Header';
import Animals from './Animals';
import theme from '../styles/themes'
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import {ANIMALS, TOGGLE_SIDENAV} from '../actions/constants'
import {Icon, Button } from '../controls'
import Header from './Header'
import Footer from './Footer'
import NotFound from './NotFound'
import Login from './Login'
const AuthRoute = ({component:Component, ...props}) => {
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
const ContentContainer = styled.main`
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
      let { animals, nav, session } = this.props.app
      return (
        <div className="container">
          <Header />
          <ContentContainer>
            <Switch>
              {Object.keys(nav.appOptions).map((i) => {
                let navItem = nav.appOptions[i]
                return (<AuthRoute session={session} key={navItem.url} exact={navItem.url==='/'} path={navItem.url} component={navItem.component}/>)
              })}
              <Route path="/login" component={Login}/>
              <Route component={NotFound}/>
            </Switch>
          </ContentContainer>
          <Footer nav={nav} />
        </div>
      );
    }
  }
export default Main;
