import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import styled from 'styled-components';
import mattheadshot from '../assets/mattheadshot.jpg'
import i18n from '../i18n';
import theme from '../styles/themes';
import HeaderBar from './HeaderBar';
const {texts} = i18n;


class Header extends Component{
    render(){
        return(
            <HeaderBar title={texts.appTitle} image={mattheadshot}/>
        )
    }
}

export default Header;