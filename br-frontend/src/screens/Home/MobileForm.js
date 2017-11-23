import React, { Component } from 'react'
import { Form } from 'reactstrap'
import glamorous from 'glamorous'
import { connect } from 'react-redux'
import { Field, reduxForm, SubmissionError, formValueSelector } from 'redux-form'

import validate from '../../config/validator'
import { addNotification } from '../../store/actions/notifications'
import API from '../../api'
import { TextInput, RadioGroup } from '../../components/Input'
import Text from '../../components/Text'
import Button from '../../components/Button'
import colors from '../../styles/colors'

const RechargeButton = glamorous(Button)({
  backgroundColor: colors.primary,
  borderColor: colors.darkBlue,
  minHeight: 50,
  width: '100%'
})

class MobileForm extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (values, dispatch) {
    const { reset } = this.props
    const orderDetails = {
      orderPhone: values.phone,
      amountCurrency: 'INR',
      amount: values.amount
    }
    return API.createOrder(orderDetails)
      .then((response) => {
        if (response.status !== 200) {
          const errors = response.data.errors.details.errors
          if (errors.orderPhone) {
            throw new SubmissionError({
              phone: errors.orderPhone.msg,
              _error: 'Something went wrong'
            })
          }
          if (errors.amount) {
            throw new SubmissionError({
              amount: errors.amount.msg,
              _error: 'Something went wrong'
            })
          }
        } else {
          const { order } = response.data
          dispatch(addNotification({
            text: `Recharge successful for ${order.order_phone}`
          }))
          reset()
        }
      })
  }

  render () {
    const { phoneType, handleSubmit, submitting } = this.props
    return (
      <Form className='mt-1 floating-labels' onSubmit={handleSubmit(this.submit)}>
        <Text tag='h5' weight='thin' className='mb-2'>Choose Account Type</Text>
        <Field
          component={RadioGroup}
          name='phoneType'
          validate={[validate.required]}
          options={[
            {title: 'Prepaid', value: 'prepaid'},
            {title: 'Postpaid', value: 'postpaid'}
          ]}
        />
        <div className='mb-3' />
        <Field
          helpBlock
          name='phone'
          id='phone'
          label='Phone Number'
          type='phone'
          component={TextInput}
          validate={[validate.required, validate.phone]}
        />
        <Field
          helpBlock
          name='operator'
          id='operator'
          label='Operator'
          component={TextInput}
          validate={[validate.required]}
        />
        <Field
          helpBlock
          name='amount'
          id='amount'
          label='Amount'
          component={TextInput}
          validate={[validate.required, validate.amount]}
        />
        <RechargeButton className='mt-3 mb-2' type='submit' disabled={submitting}>
          {phoneType === 'postpaid' ? 'Pay Bill' : 'Recharge Now'}
        </RechargeButton>
      </Form>
    )
  }
}

const MobileReduxForm = reduxForm({
  form: 'MobileForm'
})(MobileForm)

const mapStateToProps = (state) => {
  const selector = formValueSelector('MobileForm')
  return {
    phoneType: selector(state, 'phoneType'),
    initialValues: {
      phoneType: 'prepaid'
    }
  }
}

export default connect(mapStateToProps)(MobileReduxForm)
