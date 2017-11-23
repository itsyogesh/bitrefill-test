import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import glamorous from 'glamorous'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink as RNavLink
} from 'reactstrap'

import colors from '../../styles/colors'
import logo from '../../assets/images/logo.png'

const PrimaryNavbar = glamorous(Navbar)({
  minHeight: 80,
  backgroundColor: colors.primary,
  boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.15)',
  zIndex: 6
})

const NavLinkExtended = glamorous(RNavLink)({
  color: colors.mediumLightGray,
  ':hover': {
    color: colors.white
  }
})

class Primary extends Component {
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

  rightNav (isAuthenticated, user) {
    if (isAuthenticated) {
      return (
        <Nav className='ml-auto' navbar>
          <NavLinkExtended
            tag={NavLink}
            to='/account'
            activeClassName='active'
          >
            {`${user.first_name} ${user.last_name}`}
          </NavLinkExtended>
        </Nav>
      )
    } else {
      return (
        <Nav className='ml-auto' navbar>
          <NavLinkExtended
            tag={NavLink}
            to='/login'
            activeClassName='active'
          >
            Login
          </NavLinkExtended>
          <NavLinkExtended
            tag={NavLink}
            to='/signup'
            activeClassName='active'
          >
            Signup
          </NavLinkExtended>
        </Nav>
      )
    }
  }

  render () {
    const { isAuthenticated, user } = this.props
    return (
      <PrimaryNavbar dark expand='md'>
        <NavbarBrand>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          {this.rightNav(isAuthenticated, user)}
        </Collapse>
      </PrimaryNavbar>
    )
  }
}

export default Primary
