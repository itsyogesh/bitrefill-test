import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Card as RCard } from 'reactstrap'
import { connect } from 'react-redux'
import glamorous from 'glamorous'

import { SecondaryNavbar } from '../../components/Navigation'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Text from '../../components/Text'
import colors from '../../styles/colors'

import logout from '../../store/actions/logout'

const Card = glamorous(RCard)({
  border: 'none',
  borderBottom: `1px dashed ${colors.mediumGray}`,

  '&:last-child': {
    borderBottom: 'none'
  }
})

const LogoutButton = glamorous(Button)({
  borderColor: colors.darkBlue,
  color: colors.primary
})

const AddMoneyButton = glamorous(Button)({
  backgroundColor: colors.primary,
  borderColor: colors.darkBlue,
  minHeight: 50,
  width: '100%'
})

class Account extends Component {
  render () {
    const { user, logout } = this.props
    return [
      <SecondaryNavbar key='1' />,
      <Container className='mt-5 pt-3' key='2'>
        <Text tag='h4'>
          My Account
        </Text>
        <Row className='mt-4'>
          <Col lg={5}>
            <Card body>
              <Row >
                <Col lg={5}>
                  <Text tag='h5' color={colors.mediumLightGray}>Full Name :</Text>
                </Col>
                <Col lg={7}>
                  <Text tag='h5' weight='bold'>{`${user.first_name} ${user.last_name}`}</Text>
                </Col>
              </Row>
            </Card>
            <Card body>
              <Row >
                <Col lg={5}>
                  <Text tag='h5' color={colors.mediumLightGray}>Primary Email :</Text>
                </Col>
                <Col lg={7}>
                  <Text tag='h5' weight='bold'>{`${user.email}`}</Text>
                </Col>
              </Row>
            </Card>
            <Row className='mt-4'>
              <Col>
                <LogoutButton primary outline onClick={logout}>Logout</LogoutButton>
              </Col>
            </Row>
          </Col>
          <Col lg={5} className='mx-auto'>
            <Text tag='h3' weight='bold'>Add Money to your account<br />and get exciting offers!</Text>
            <Card body className='mt-4'>
              <Form className='mt-1 floating-labels'>
                <FormGroup row>
                  <Col lg={12}>
                    <input
                      className='form-control float'
                      name='amount'
                      id='amount'
                    />
                    <span class='bar' />
                    <label for='amount'>Enter Amount</label>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <AddMoneyButton> Add Now </AddMoneyButton>
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    ]
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, { logout })(Account)
