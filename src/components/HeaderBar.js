import React, {Component} from 'react';
import styled from 'styled-components';

import theme from '../styles/themes';
import {media, sizes} from '../styles/utils';

import {Icon, ColorSpan, NavUl} from '../controls';
import {NavLink as Link} from 'react-router-dom';

const Container = styled.div`
  text-align: right;
  justify-content: space-between;
  display: flex;
  align-content: center;
  background-color: ${theme.primaryColor};
  border-top: 4px solid ${theme.primaryBorder};
  border-bottom: 1px solid ${theme.inputBorder};
  color:${theme.fontColor};
  padding:0em 0em 0em 0em;
  height: ${props => props.height ? props.height : '6em'};
  width: 100%;
  position:relative;
`;

const LeftContainer = styled.div`
  display:flex;
  padding:0.5em 0em;
  margin-left: 0em;
`;
const RightContainer = styled.div`
  display:flex;
  margin-left: .5em;
`;

class HeaderBar extends Component{
  constructor(props){
    super(props)
  }
  render(){
      let {title, image, barHeight} = this.props
      return (
          <Container height={barHeight}>
            <LeftContainer>
            </LeftContainer>
            <RightContainer>
            <h1>{title}</h1>
            </RightContainer>
          </Container>
      )
  }
}

export default HeaderBar