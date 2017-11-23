import React, { Component } from 'react'
import { Row, Col, Card as RCard } from 'reactstrap'
import glamorous from 'glamorous'

import SubscriptionForm from './SubscriptionForm'
import Text from '../../components/Text'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import colors from '../../styles/colors'

import mobileIcon from '../../assets/images/mobile.png'

const Card = glamorous(RCard)({
  borderRadius: 2,
  border: 'none',
  borderBottom: `1px solid ${colors.mediumGray}`
})

const SetupButton = glamorous(Button)({
  borderColor: colors.darkBlue,
  color: colors.primary
})

const Image = glamorous.img({
  width: 30,
  height: 'auto'
})

class PhoneSubscription extends Component {
  constructor (props) {
    super(props)

    this.state = {
      setupActive: false
    }
    this.handleSetupClick = this.handleSetupClick.bind(this)
  }

  handleSetupClick () {
    this.setState({ setupActive: !this.state.setupActive })
  }

  render () {
    const { phone } = this.props
    return (
      <Card body className='mt-3'>
        <Row>
          <Col sm={2}>
            <Icon rounded width={50} height={50}>
              <Image src={mobileIcon} alt='' />
            </Icon>
          </Col>
          <Col sm={7}>
            <Text tag='h5'>{phone}</Text>
            <Text tag='p' color={colors.mediumGray}>Prepaid</Text>
          </Col>
          <Col sm={3}>
            <SetupButton primary outline onClick={this.handleSetupClick}>Setup</SetupButton>
          </Col>
        </Row>
        {this.state.setupActive && <SubscriptionForm phone={phone} />}
      </Card>
    )
  }
}

const NewSubscriptionList = ({ phones }) => {
  const { phoneNumbers } = phones
  if (phones.isLoading) {
    return (
      <Container className='text-center my-5 py-5'>
        <Text tag='p' weight='bold'>Loading Phones...</Text>
      </Container>
    )
  }

  if (!phoneNumbers || phoneNumbers.length === 0) {
    return (
      <Container className='text-center my-5 py-5'>
        <Text tag='p' weight='bold'>Recharge a phone to get started</Text>
      </Container>
    )
  }

  return (
    <Container>
      {phoneNumbers.map(phone => (
        <PhoneSubscription
          key={phone}
          phone={phone}
        />
      ))}
    </Container>
  )
}

export default NewSubscriptionList
