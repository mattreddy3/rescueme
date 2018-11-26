import React, {Component} from 'react';
import i18n from '../i18n';
import theme from '../styles/themes';
import {ListGroup} from '../controls'
import styled from 'styled-components';

const Li = styled.li`

  :hover{
    background:lightgrey;
    cursor:pointer;
  }
`

const CustomComponent = (props) => {
  return(
    <Li className="list-group-item" {...props}>
      {props.children}
    </Li>
  )
}
const List = (props) => {
  return(
    <ListGroup componentClass="ul">
      {props.context && props.context.list.map((listItem) => {
      return  <CustomComponent
                key={listItem.id}
                onClick={() => {
                  return props.onItemClick(listItem)
                }}>
                {listItem.name}
              </CustomComponent>
      })}
    </ListGroup>
  )
}


export default List;
