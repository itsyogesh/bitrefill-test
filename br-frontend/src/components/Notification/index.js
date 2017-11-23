import React, { Component } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import colors from '../../styles/colors'

const ListItem = glamorous.li({
  alignItems: 'flex-start',
  borderRadius: '3px',
  display: 'flex',
  color: colors.white,
  padding: '12px 16px',

  '&:not(:last-child)': {
    margin: '0 0 12px'
  }
})

const Content = glamorous.p({
  flex: '1 1 auto',
  margin: '0 12px 0 0',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
})

const DismissButton = glamorous.button({
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  background: 'transparent',
  border: 0,
  color: 'inherit',
  cursor: 'pointer',
  display: 'block',
  flex: '0 0 auto',
  padding: 0
})

class Notification extends Component {
  shouldComponentUpdate () {
    return false
  }
  render () {
    return (
      <ListItem style={{ backgroundColor: this.props.color }}>
        <Content>{this.props.text}</Content>
        <DismissButton onClick={this.props.onDismissClick}>x</DismissButton>
      </ListItem>
    )
  }
}

Notification.propTypes = {
  color: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Notification
