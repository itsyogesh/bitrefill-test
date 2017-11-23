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

const Footer = glamorous(Navbar)({
  minHeight: 80,
  marginTop: '8rem',
  backgroundColor: colors.darkerBlue
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

  render () {
    return (
      <Footer dark expand='md'>
        <NavbarBrand>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavLinkExtended
              tag={NavLink}
              to='/about'
              activeClassName='active'
            >
              About
            </NavLinkExtended>
            <NavLinkExtended
              tag={NavLink}
              to='/privacy'
              activeClassName='active'
            >
              Privacy
            </NavLinkExtended>
            <NavLinkExtended
              tag={NavLink}
              to='/faq'
              activeClassName='active'
            >
              FAQ
            </NavLinkExtended>
            <NavLinkExtended
              tag={NavLink}
              to='/follow'
              activeClassName='active'
            >
              Follow
            </NavLinkExtended>
          </Nav>
        </Collapse>
      </Footer>
    )
  }
}

export default Primary
