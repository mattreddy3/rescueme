import React, {Component} from 'react';
import ThumbnailGrid from './ThumbnailGrid'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions';

import styled from 'styled-components';
import i18n from '../i18n';
import theme from '../styles/themes';
import List from './List'
import {Button, Select, FlexDiv, Well, Modal, Nav, NavItem} from '../controls/index';
const {texts} = i18n;

const initialState = {
  show:false,
  currentItem:{},
  activeKey:1
}

const ProfileIcon = styled.img`
  height:4em;
  width:6em;
  border-radius:20px;
  border:0px;
  text-align:center;
  margin-right:1em;
`
const Info = styled.p`
  color:grey;
`
const ProfileInfo = ({item}) => {
  return(
    <Info>
      {item.color} {item.species}
      <br/>
      {item.weight} kg
    </Info>
  )
}
class Animals extends Component{
    state = initialState
    componentWillMount = ( ) => {
        //TODO: add call for textures using this.props.fetchTextures()
    }
    handleHide = () => {
      this.setState({show:false})
    }
    onItemClick = (currentItem) => {
      this.setState({
        show:true,
        currentItem
      })
    }
    handleSelect = (activeKey) => {
      this.setState({
        activeKey
      })
    }
    render(){
        let {nav} = this.props
        return(
            <div className="modal-container">
              <Well>
                <h4>My Animals</h4>
                <List onItemClick={this.onItemClick} context={this.props.animals}/>
              </Well>
              <Modal show={this.state.show}
                onEnter={() => this.setState({activeKey:1})}
                onHide={this.handleHide}
                container={this}
                aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title">
                    <FlexDiv flexDirection="column" >
                      <h3>{this.state.currentItem.name}</h3>
                    </FlexDiv>
                  </Modal.Title>
                  <FlexDiv flexDirection="row" justifyContent="space-between">
                    <ProfileInfo item={this.state.currentItem}/>
                    <ProfileIcon src={this.state.currentItem.image}/>
                  </FlexDiv>
                  <Nav bsStyle="pills" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    {nav && Object.keys(nav.animalOptions).map((n)=>{
                      const obj = nav.animalOptions[n]
                      return (
                        <NavItem key={obj.id} eventKey={obj.id} >
                          {obj.title}
                        </NavItem>
                      )
                    })}
                  </Nav>
                </Modal.Header>
                <Modal.Body>
                  {nav.animalOptions && nav.animalOptions[this.state.activeKey].component()}
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleHide}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
        )
    }
}
const mapState = (state) => {
    const {nav, animals} = state.app;
    return {
      animals,
      nav
    }
  }

const mapDispatch = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapState, mapDispatch)(Animals)
