import React from 'react'
import { Row, Col } from 'reactstrap'
import glamorous from 'glamorous'

import Text from '../../components/Text'
import Button from '../../components/Button'
import colors from '../../styles/colors'

const OrderRow = glamorous(Row)({
  borderBottom: `2px solid ${colors.lightGray}`,
  alignItems: 'center',

  ':hover': {
    backgroundColor: colors.lightGray
  }
})

const DetailsButton = glamorous(Button)({
  borderColor: colors.darkBlue,
  color: colors.primary
})

const Order = ({ order }) => (
  <OrderRow className='pt-4 pb-4'>
    <Col lg={3}>
      <Text tag='p'>{order.order_date}</Text>
    </Col>
    <Col lg={5}>
      <Text tag='p'>
        {`Recharge for ${order.order_phone}`} <br />
        {`Transaction Id : ${order.id}`}
      </Text>
    </Col>
    <Col lg={2}>
      <Text tag='p'>{`${order.amount_currency} ${order.amount}`}</Text>
    </Col>
    <Col lg={2}>
      <DetailsButton primary outline>Details</DetailsButton>
    </Col>
  </OrderRow>
)

export default Order
