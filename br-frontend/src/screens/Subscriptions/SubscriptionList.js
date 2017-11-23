import React from 'react'
import { Row, Col, Card as RCard } from 'reactstrap'
import glamorous from 'glamorous'

import Text from '../../components/Text'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import colors from '../../styles/colors'

import mobileIcon from '../../assets/images/mobile.png'

const Card = glamorous(RCard)({
  borderRadius: 2,
  boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.15)'
})

const SubscriptionRow = glamorous(Row)({
  alignItems: 'center'
})

const Badge = glamorous.div({
  display: 'inline-block',
  width: 10,
  height: 10,
  backgroundColor: colors.success,
  borderRadius: '50%'
})

const Subscription = ({ subscription }) => (
  <Card body className='mt-3'>
    <SubscriptionRow>
      <Col sm={2}>
        <Icon rounded>
          <img src={mobileIcon} alt='' />
        </Icon>
      </Col>
      <Col sm={7}>
        <Text tag='h5' weight='bold'>{subscription.phone}</Text>
        <Text tag='p' color={colors.mediumGray}>{subscription.interval}</Text>
        <Text tag='p'><Badge /> Due on {subscription.next_due_date}</Text>
      </Col>
      <Col sm={3}>
        <Text tag='h6' weight='bold' className='float-left pt-1'>
          {subscription.amount_currency}
        </Text>
        <Text tag='h3' weight='bold' className='pl-4'>
          {subscription.amount}
        </Text>
        <Button primary outline className='mt-2'>Cancel</Button>
      </Col>
    </SubscriptionRow>
  </Card>
)

const SubscriptionList = ({ subscriptions }) => {
  const subscriptionList = Object.keys(subscriptions.subscriptionList)

  if (subscriptions.isLoading) {
    return (
      <Container className='text-center my-5 py-5'>
        <Text tag='p' weight='bold'>Loading Subscriptions...</Text>
      </Container>
    )
  }

  if (!subscriptionList || subscriptionList.length === 0) {
    return (
      <Container className='text-center my-5 py-5'>
        <Text tag='p' weight='bold'>No Subscriptions Found</Text>
      </Container>
    )
  }

  return (
    <Container>
      <Text tag='h5' weight='bold' className='mb-4'>Upcoming Subscriptions</Text>
      {subscriptionList.map(subscriptionId => (
        <Subscription
          key={subscriptionId}
          subscription={subscriptions.subscriptionList[subscriptionId]}
        />
      ))}
    </Container>
  )
}

export default SubscriptionList
