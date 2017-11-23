import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'

import { SecondaryNavbar } from '../../components/Navigation'
import Container from '../../components/Container'
import Text from '../../components/Text'
import SubscriptionList from './SubscriptionList'
import NewSubscription from './NewSubscription'

import getPhoneNumbers from '../../store/actions/phones'
import { getSubscriptions } from '../../store/actions/subscriptions'

class Orders extends Component {
  componentDidMount () {
    this.props.getPhoneNumbers()
    this.props.getSubscriptions()
  }

  render () {
    return [
      <SecondaryNavbar key='1' />,
      <Container className='mt-5 pt-3' key='2'>
        <Text tag='h4' weight='bold'>Auto Recharge / Subscriptions</Text>
        <Text
          tag='h5'
          className='mt-3'
        >
          Set up auto recharge or bill payment for your connections
        </Text>
        <Row className='mt-4'>
          <Col lg={5}>
            <NewSubscription phones={this.props.phones} />
          </Col>
          <Col lg={7}>
            <SubscriptionList subscriptions={this.props.subscriptions} />
          </Col>
        </Row>
      </Container>
    ]
  }
}

const mapStateToProps = (state) => ({
  subscriptions: state.subscriptions,
  phones: state.phones
})

export default connect(mapStateToProps, { getPhoneNumbers, getSubscriptions })(Orders)
