import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import styled from 'styled-components';
import i18n from '../i18n';
import theme from '../styles/themes';
const {texts} = i18n;

class Thumbnail extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image}/>
            </div>
        )
    }
}

export default Thumbnail;