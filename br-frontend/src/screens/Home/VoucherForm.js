import React, { Component } from 'react'
import { Form, FormGroup, Col } from 'reactstrap'
import glamorous from 'glamorous'

import Button from '../../components/Button'
import colors from '../../styles/colors'

const BuyButton = glamorous(Button)({
  backgroundColor: colors.primary,
  borderColor: colors.darkBlue,
  minHeight: 50,
  width: '100%'
})

class VoucherForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      voucherName: '',
      amount: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  render () {
    console.log(this.state)
    return (
      <Form className='mt-1 floating-labels'>
        <FormGroup row>
          <Col lg={12}>
            <input
              className={`form-control ${this.state.voucherName.length > 0
                ? 'float float-value' : 'float'}`}
              name='voucherName'
              id='voucherName'
              onChange={this.handleChange}
              required
            />
            <span className='bar' />
            <label htmlFor='voucherName'>Voucher Name</label>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={12}>
            <input
              className={`form-control ${this.state.amount.length > 0
                ? 'float float-value' : 'float'}`}
              name='amount'
              id='amount'
              onChange={this.handleChange}
              required
            />
            <span className='bar' />
            <label htmlFor='amount'>Enter Amount</label>
          </Col>
        </FormGroup>
        <BuyButton className='mt-3 mb-2'>
          Buy Voucher
        </BuyButton>
      </Form>
    )
  }
}

export default VoucherForm
