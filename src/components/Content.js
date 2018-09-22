import React, {Component} from 'react';
import ThumbnailGrid from './ThumbnailGrid'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions';

// import styled from 'styled-components';
import i18n from '../i18n';
import theme from '../styles/themes';
import {Button, Select} from '../controls/index';
const {texts} = i18n;

const initialState = {
    contexts: {},
    selectedContext: ""
}

const contextList = [
    {
        "description":"textures",
        "id":0
    }
]

class Content extends Component{
    state = initialState
    componentWillMount = ( ) => {
        //TODO: add call for textures using this.props.fetchTextrures()
    }
    changeContext = (selectedContext) => {
        if(selectedContext){
            let contexts = this.props[selectedContext.description]
            this.setState({
                ...this.state,
                selectedContext,
                contexts
            })
        }else{
            this.setState(initialState)
        }
    }
    render(){
        let {contexts} = this.state
        return(
            <div>
                <Select
                    options={contextList}
                    value={this.state.selectedContext}
                    labelKey="description"
                    valueKey="id"
                    onChange={this.changeContext}
                    />
                <ThumbnailGrid contexts={contexts}/>
            </div>
        )
    }
}
const mapState = (state) => {
    const {textures} = state.app;
    return {
        textures
    }
  }

const mapDispatch = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapState, mapDispatch)(Content)
