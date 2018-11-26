/*
 Using this file as a store for our custom control component abstraction.
 Excluding control components that are specific to a container.
 i.e. most controls within SideNav, HeaderBar, etc.
 Exporting all as named.
*/
import styled,{css} from 'styled-components'
import theme from '../styles/themes'
import {media} from '../styles/utils'
import RawDatePicker from 'react-datepicker'
import Creatable from 'react-select/lib/Creatable'
import RawSelect from 'react-select'
import React from 'react'

import {
	Modal,
	Tabs as RawTabs,
	Tab,
	Tooltip,
	OverlayTrigger,
	Grid,
	ListGroup,
	ListGroupItem,
	Row,
	Col,
	Form,
	Nav,
	FormGroup as RawFormGroup,
	FormControl,
	ControlLabel,
	NavItem,
	Well as RawWell,
  Badge as RawBadge,
  Carousel as Carousel
} from 'react-bootstrap'


export const Button = styled.button`
  font-size: ${props => props.size || '1em'};
  margin: ${props => props.margin || '.5em'};
  padding: 0.25em .65em;
  border: 2px solid ${props => props.color || theme.secondaryColor};
  border-radius: ${props => props.borderRadius || '4px'};
  background-color: ${props => props.color || theme.secondaryColor};
  color:${props => props.textColor || 'black'};
  font-family:inherit;
  cursor:${props => props.disabled ? 'not-allowed !important' : 'pointer'};

  :focus{
    outline: none;
    background: rgba(0,0,0,0.05);
  }
`

export const Icon = styled.i.attrs({
	className: (props => {
		let classString = 'fa fa-fw fa-' + props.icon
		if(props.spin){classString+=' fa-spin'}
		if(props.pulse){classString+=' fa-pulse'}
		return classString
	})
})`
  font-size:${props => props.size || 'inherit'};
  color:${props => props.color || 'inherit'};
`

export const IconWithOverlay = (props) => {
	let tooltip = <Tooltip id={props.id}>{props.tooltip}</Tooltip>
	return(
		<OverlayTrigger delayShow={props.delayShow || 200} overlay={tooltip} placement={props.placement || 'right'}>
			<Icon {...props}/>
		</OverlayTrigger>
	)
}

const FormGroup = styled(RawFormGroup)`
`

const Badge = styled(RawBadge)`
  background-color: ${props => props.color || theme.fontColor};
  color:${props => props.textColor || 'white'};
`
// Input styling
const inputStyle = css`
  font-size:1em;
  border-radius:4px;
  border-width:${props => props.error ? '2px' : '1px'};
  margin:1em !important;
  width: ${props => props.width || '100%'};
  border-color:${props => props.error ? theme.error : theme.inputBorder};
  border-image-width:0px;
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #aaa;
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: #aaa;
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: #aaa;
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: #aaa;
  }
`

const StyledInput = styled.input`
border-style:solid;
  padding: 0px 10px 0px 10px;
  ${inputStyle}
  height:36px;
`

export const FlexDiv = styled.div`
  display:flex;
  justify-content: ${props=>props.justifyContent ? props.justifyContent : 'inherit'};
  align-items: ${props=>props.alignItems ? props.alignItems : 'inherit'};
  flex-direction: ${props=>props.flexDirection ? props.flexDirection : 'inherit'};
`

export const Input = (props) => (
	<FlexDiv justifyContent={props.justifyContent}>
		<StyledInput {...props}/>
	</FlexDiv>
)

export const DatePicker = styled(RawDatePicker)`
border-style:solid;
  height:36px;
  padding: 0px 10px 0px 10px;
  ${inputStyle}
`

const StyledSelect = styled(RawSelect)`
  ${inputStyle}
  display:inline-block;
  min-width:168px;
`
export const Select = (props) => (
	<FlexDiv>
		<StyledSelect {...props}/>
	</FlexDiv>
)

const StyledCreateableSelect = styled(Creatable)`
  ${inputStyle}
  display:inline-block;
  min-width:168px;
`

export const CreateableSelect = (props) => (
	<FlexDiv>
		<StyledCreateableSelect {...props}/>
	</FlexDiv>
)

export const ColorSpan = styled.span`
  color:${props => props.color };
`

const ActionBar = styled.div`
  display:flex;
  width:100%;
  height:auto;
  justify-content: ${props => props.pushright ? 'flex-end' : 'space-between'};
  padding:0 .9em;
  `
const Tabs = styled(RawTabs)`
  .nav{
    margin-bottom:1em;
  }
  `

const FormInputRow = (props) => {

	return (
		<Row>
			<Col componentClass={ControlLabel} htmlFor={props.id} xs={props.labelXs||12} md={props.labelMd||2}>
				{props.label}
			</Col>
			<Col xs={props.inputXs||12} md={props.inputMd||10}>
				<Input
					{...props}
					name={props.id}
					type={props.type || 'text'}
					placeholder={props.placeholder || 'Enter text'}
				/>
			</Col>
		</Row>
	)
}
export const FormDateRow = (props) => {
	let labelXs = 12
	let inputXs = 12
	let labelMd = 2
	let inputMd = 10
	if(props.fullRow){
		labelMd = 12
		inputMd = 12
	}
	return (
		<Row>
			<Col componentClass={ControlLabel} htmlFor={props.id} xs={labelXs} md={labelMd}>
				{props.label}
			</Col>
			<Col xs={inputXs} md={inputMd}>
				<DatePicker
					{...props}
					placeholderText={props.placeholderText || 'MM/DD/YYYY'}
					name={props.id}
				/>
			</Col>
		</Row>
	)
}
export const FormSelectRow = (props) => {
	let RenderedSelect = Select
	if(props.createable){
		RenderedSelect = CreateableSelect
	}
	return (
		<Row>
			<Col xs={props.labelXs||12} componentClass={ControlLabel} htmlFor={props.id} md={props.labelMd||2}>
				{props.label}
			</Col>
			<Col xs={props.inputXs||12} md={props.inputMd||10}>
				<RenderedSelect
					{...props}
					name={props.id}
					labelKey={props.labelKey || 'description'}
					valueKey={props.valueKey || 'id'}
					placeholder={props.placeholder || 'Select value'}

				/>
			</Col>
		</Row>
	)
}
const Well = styled(RawWell)`
  margin-right:1em;
  margin-left:1em;
`
export const NavUl = styled.ul`
  width:100%;
  min-width:${props => props.collapsed ? 'inherit' : '140px'};
  list-style-type: none;
  margin: 0;
  height: ${props => props.height ? props.height: 'inherit'};
  padding: 0em;
  transition: width 2s;
  a{
    text-decoration: none;
    width:100%;
    visibility:inherit;
    border-radius: .5px;
    padding:0;
    margin:0;
    text-align: left;
    height: ${props => props.itemHeight ? props.itemHeight: 'inherit'};
  }
  a:link,a:visited{
    color: ${theme.fontColor};
    padding: ${props => props.itemPadding ? props.itemPadding: '.65em'};
    margin: ${props => props.itemMargin ? props.itemMargin: '0em'};
    text-decoration: none;
    display: inline-block;
    width:100%;
    visibility:inherit;
    transition: width 2s;
  }
  a:hover, a:active{
    opacity:0.7;
  }
  a.active{
    background-color:${theme.highlightColor};
  }
  ${media.small`
    a{
      text-align: center;
    }

  `}
`

export {Carousel, Badge, ListGroupItem, ListGroup, Well, Form, FormInputRow, FormGroup, ControlLabel, FormControl, Tabs, Tab, ActionBar, Modal, Tooltip, OverlayTrigger, Grid, Row, Col, Nav, NavItem}
