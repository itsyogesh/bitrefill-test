import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import glamorous from 'glamorous'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink as RNavLink
} from 'reactstrap'

import colors from '../../styles/colors'

const SecondaryNavbar = glamorous(Navbar)({
  minHeight: 64,
  backgroundColor: colors.lightGray,
  borderBottom: `1px solid ${colors.mediumGray}`
})

const NavLinkExtended = glamorous(RNavLink)({
  color: colors.mediumGray,
  height: '100%',
  fontWeight: 'bold',

  ':hover': {
    color: colors.black
  }
})

class Secondary extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <SecondaryNavbar light expand='md'>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto mr-auto' navbar>
            <NavLinkExtended
              tag={NavLink}
              to='/account'
              activeClassName='active'
            >
              Account
            </NavLinkExtended>
            <NavLinkExtended
              tag={NavLink}
              to='/orders'
              activeClassName='active'
            >
              Orders
            </NavLinkExtended>
            <NavLinkExtended
              tag={NavLink}
              to='/subscriptions'
              activeClassName='active'
            >
              Subscriptions
            </NavLinkExtended>
          </Nav>
        </Collapse>
      </SecondaryNavbar>
    )
  }
}

export default Secondary
