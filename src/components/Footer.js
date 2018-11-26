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
  state = { currentButton:1 }
  selectButton = (i) => {
    const that = this;
    return () => {
      that.setState({
        ...that.state,
        currentButton:i
      })

    }
  }
  isButtonSelected = (i) => {
    return this.state.currentButton == i
  }
  render () {
    let {nav} = this.props
    return (
      <FooterContainer>
        {nav && Object.keys(nav.appOptions).map((i) => {
          const obj = nav.appOptions[i]
          return(<MenuButton key={i} onClick={this.selectButton(i)} selected={this.isButtonSelected(i)}>
            {obj.title}
          </MenuButton>)
        })

        }
      </FooterContainer>
    )
  }
}

export default Footer
