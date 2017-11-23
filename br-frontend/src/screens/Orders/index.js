import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import glamorous from 'glamorous'

import { SecondaryNavbar } from '../../components/Navigation'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Order from './Order'
import colors from '../../styles/colors'

import { getOrders } from '../../store/actions/orders'

const HeaderRow = glamorous(Row)({
  borderBottom: `2px solid ${colors.mediumGray}`
})

const OrderContainer = glamorous(Container)({
  maxWidth: '75vw'
})

const EmptyContainer = glamorous(Container)({
  marginTop: 175,
  marginBottom: 175
})

const OrdersList = ({ orders }) => {
  const orderList = Object.keys(orders.orderList)

  if (orders.isLoading) {
    return (
      <EmptyContainer className='text-center py-5'>
        <Text tag='p' weight='bold'>Loading orders...</Text>
      </EmptyContainer>
    )
  }
  if (!orderList || orderList.length === 0) {
    return (
      <EmptyContainer className='text-center py-5'>
        <Text tag='p' weight='bold'>No orders found</Text>
      </EmptyContainer>
    )
  }
  return (
    <OrderContainer className='mt-5 pt-3' key='2'>
      <HeaderRow className='pb-2'>
        <Col lg={3}>
          <Text tag='h6' uppercased>Date</Text>
        </Col>
        <Col lg={5}>
          <Text tag='h6' weight='bold' uppercased>Description</Text>
        </Col>
        <Col lg={2}>
          <Text tag='h6' weight='bold' uppercased>Amount</Text>
        </Col>
      </HeaderRow>
      {orderList.map((order) =>
        <Order key={order} order={orders.orderList[order]} />
      )}
    </OrderContainer>
  )
}

class Orders extends Component {
  componentDidMount () {
    this.props.getOrders()
  }

  render () {
    const { orders } = this.props

    return [
      <SecondaryNavbar key='1' />,
      <OrdersList orders={orders} />
    ]
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders
})

export default connect(mapStateToProps, { getOrders })(Orders)
