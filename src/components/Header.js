import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import styled from 'styled-components';
import mattheadshot from '../assets/mattheadshot.jpg'
import i18n from '../i18n';
import theme from '../styles/themes';
import HeaderBar from './HeaderBar';
const {texts} = i18n;


 const Header = (props) => <HeaderBar {...props} title='PANDA WATCH'/>

export default Header;