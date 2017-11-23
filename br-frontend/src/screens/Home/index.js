import React, { Component } from 'react'
import { Jumbotron, Row, Col, Card as RCard, Nav as RNav, NavLink as RNavLink } from 'reactstrap'
import glamorous from 'glamorous'
import { Route, Switch, NavLink, withRouter } from 'react-router-dom'

import Container from '../../components/Container'
import MobileForm from './MobileForm'
import VoucherForm from './VoucherForm'

import Text from '../../components/Text'
import colors from '../../styles/colors'
import { weights } from '../../styles/typography'

const Banner = glamorous(Jumbotron)({
  backgroundColor: colors.darkerBlue,
  padding: 0
})

const Card = glamorous(RCard)({
  borderRadius: 6,
  boxShadow: '0 1px 5px 1px rgba(0, 0, 0, 0.2)',
  maxWidth: '70%'
})

const Nav = glamorous(RNav)({
  maxWidth: '70%'
})

const NavLinkExtended = glamorous(RNavLink)({
  color: colors.mediumLightGray,

  ':hover': {
    color: colors.white,
    fontWeight: weights.bold
  },

  '&.active': {
    color: colors.white,
    fontWeight: weights.bold
  }
})

class Home extends Component {
  render () {
    const { location } = this.props
    console.log(location, location.pathName === '/' || location.pathName === '/mobile')
    return (
      <Container fluid>
        <Banner fluid>
          <Row className='pb-5'>
            <Col lg={6}>
              <Container className='mt-5'>
                <Nav className='mx-auto mb-2'>
                  <NavLinkExtended
                    tag={NavLink}
                    to='/mobile'
                    isActive={() => location.pathname === '/' || location.pathname === '/mobile'}
                    activeClassName='active'
                  >
                    Mobile
                  </NavLinkExtended>
                  <NavLinkExtended
                    tag={NavLink}
                    to='/vouchers'
                    activeClassName='active'
                  >
                    Vouchers
                  </NavLinkExtended>
                </Nav>
                <Card body className='mx-auto'>
                  <Switch>
                    <Route path='/mobile' component={MobileForm} />
                    <Route path='/vouchers' component={VoucherForm} />
                    <Route exact path='/' component={MobileForm} />
                  </Switch>
                </Card>
              </Container>
            </Col>
            <Col lg={6}>
              <Container className='mt-5'>
                <Row className='d-flex align-items-center'>
                  <Col>
                    <Text tag='h3' weight='light' inverse>
                      Instant Refills
                    </Text>
                    <Text tag='h5' inverse>
                      Now you can send instant refills when you
                      pay with your account balance
                    </Text>
                  </Col>
                  <Col>
                    <Container fluid className='mt-4'>
                      <img src='https://account.bitrefill.com/static/media/phone.431f3a1c.png' alt='' />
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Banner>
        <Container className='my-5 py-4 text-center'>
          <Text className='mt-4' tag='h3' weight='bold'>Getting Started with Bitrefill Is Simple</Text>
          <Row className='mt-5 pt-3'>
            <Col lg={4}>
              <Text tag='h4' weight='bold'>Select Operator</Text>
              <Text tag='h5'>
                We can top up prepaid SIM cards from over 600 operators in 150 countries. Is your phone supported? Select your operator and find out!
              </Text>
            </Col>
            <Col lg={4}>
              <Text tag='h4' weight='bold'>Select an amount</Text>
              <Text tag='h5'>
                Our fees are the most competitive for online top ups. Using Bitcoin allows us to cut costs, and pass the savings on to you.
              </Text>
            </Col>
            <Col lg={4}>
              <Text tag='h4' weight='bold'>Pay with Bitcoin</Text>
              <Text tag='h5'>
                Full privacy. The top up happens as soon as the transaction clears, normally within 10 minutes. The top up activation is automatic for supported operators. For other operators we will send you a PIN code and instructions by email.
              </Text>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default withRouter(Home)
