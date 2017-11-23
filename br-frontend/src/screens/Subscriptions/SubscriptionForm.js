import React, { Component } from 'react'
import { Form } from 'reactstrap'
import glamorous from 'glamorous'
import { Field, reduxForm, SubmissionError } from 'redux-form'

import validate from '../../config/validator'
import { addNotification } from '../../store/actions/notifications'
import { getSubscriptions } from '../../store/actions/subscriptions'
import API from '../../api'
import { TextInput, RadioGroup } from '../../components/Input'
import Button from '../../components/Button'
import colors from '../../styles/colors'

const SetupButton = glamorous(Button)({
  backgroundColor: colors.primary,
  borderColor: colors.darkBlue,
  minHeight: 50,
  width: '100%'
})

class SubscriptionForm extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit (values, dispatch) {
    const { reset, phone } = this.props
    const subscriptionDetails = {
      phone,
      amountCurrency: 'INR',
      amount: values.amount,
      description: values.description,
      interval: values.interval
    }
    return API.createSubscription(subscriptionDetails)
      .then((response) => {
        console.log(response)
        if (response.status !== 200) {
          const errors = response.data.errors.details.errors
          if (errors.amount) {
            throw new SubmissionError({
              amount: errors.amount.msg,
              _error: 'Something went wrong'
            })
          }
        } else {
          const { subscription } = response.data
          dispatch(addNotification({
            text: `New subscription added for ${subscription.phone}`
          }))
          reset()
          dispatch(getSubscriptions())
        }
      })
  }

  render () {
    const { handleSubmit, submitting } = this.props
    return (
      <Form className='mt-2 floating-labels' onSubmit={handleSubmit(this.submit)}>
        <Field
          helpBlock
          name='amount'
          id='amount'
          label='Amount'
          component={TextInput}
          validate={[validate.required, validate.amount]}
        />
        <Field
          helpBlock
          name='description'
          id='description'
          label='Description'
          component={TextInput}
          validate={[validate.required]}
        />
        <Field
          helpBlock
          component={RadioGroup}
          name='interval'
          validate={[validate.required]}
          options={[
            {title: '7 Days', value: '7'},
            {title: '14 Days', value: '14'},
            {title: '28 Days', value: '28'}
          ]}
        />
        <SetupButton className='mt-3 mb-2' type='submit' disabled={submitting}>
          Add Subscription
        </SetupButton>
      </Form>
    )
  }
}

const SubscriptionReduxForm = reduxForm({
  form: 'SubscriptionForm'
})(SubscriptionForm)

export default SubscriptionReduxForm
