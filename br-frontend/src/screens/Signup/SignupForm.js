import React, { Component } from 'react'
import { Form, Col } from 'reactstrap'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'
import { Field, reduxForm, SubmissionError } from 'redux-form'

import validate from '../../config/validator'
import { TextInput } from '../../components/Input'
import Text from '../../components/Text'
import Button from '../../components/Button'

import API from '../../api'
import signup from '../../store/actions/signup'

const SignupButton = glamorous(Button)({
  width: '50%',
  minHeight: '50px'
})

class SignupForm extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (values, dispatch) {
    const name = values.name.split(' ')
    const userDetails = {
      firstName: name[0],
      lastName: name[1] || '',
      email: values.email,
      phone: values.phone,
      password: values.password
    }
    return API.signup(userDetails)
      .then((response) => {
        if (response.status !== 200) {
          const errors = response.data.errors.details.errors
          if (errors.email) {
            throw new SubmissionError({
              email: errors.email.msg,
              _error: 'Something went wrong'
            })
          }
        } else {
          dispatch(signup(response.data.user))
        }
      })
  }

  render () {
    const { handleSubmit, submitting } = this.props
    return (
      <Form className='mt-1 floating-labels' onSubmit={handleSubmit(this.submit)}>
        <Field
          helpBlock
          name='name'
          id='name'
          label='Full Name'
          component={TextInput}
          validate={[validate.required]}
        />
        <Field
          helpBlock
          name='email'
          type='email'
          id='email'
          label='Email'
          component={TextInput}
          validate={[validate.required, validate.email]}
        />
        <Field
          helpBlock
          name='phone'
          type='phone'
          id='phone'
          label='Primary Phone'
          component={TextInput}
          validate={[validate.required, validate.phone]}
        />
        <Field
          helpBlock
          name='password'
          type='password'
          id='password'
          label='Password'
          component={TextInput}
          validate={[validate.required]}
        />
        <Col lg={12} className='mt-3 text-center'>
          <SignupButton color='primary' type='submit' disabled={submitting}>
            Create Account
          </SignupButton>
          <Text tag='h5' className='mt-3'>Already have an account? <Link to='/login'>Login</Link></Text>
        </Col>
      </Form>
    )
  }
}

export default reduxForm({ form: 'SignupForm' })(SignupForm)
