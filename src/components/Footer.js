import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FooterContainer = styled.div`
  background: lightcoral;
  width: 100%;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
  max-width: 100%;
  display: flex;
  justify-content: center;
  min-height: 4.5rem;
  align-items: center;
  flex-flow: row nowrap;
`

const MenuButton = styled.div`
  padding: 3vh;
  display:flex;
  flex: 1 1 auto;
  max-width:120px;
  margin:0;
  border-radius: 4px 4px 0 0;
  min-height:4.5rem;
  background-color:${props => props.selected ? 'lightblue' : 'inherit'};

  :hover{
    cursor:pointer;
  }
`

class Footer extends Component{
  static PropTypes = {

  }
  state = { currentButton:2 }
  selectButton = (i) => {
    const that = this;
    return () => {
      that.setState({
        ...that.state,
        currentButton:i
      })

    }
  }
  render () {

    return (
      <FooterContainer>
        <MenuButton key={0} onClick={this.selectButton(0)} selected={this.state.currentButton === 0}>
          Option 1
        </MenuButton>
        <MenuButton key={1} onClick={this.selectButton(1)} selected={this.state.currentButton === 1}>
          Option 2
        </MenuButton>
        <MenuButton key={2} onClick={this.selectButton(2)} selected={this.state.currentButton === 2}>
          Option 3
        </MenuButton>
      </FooterContainer>
    )
  }
}

export default Footer
