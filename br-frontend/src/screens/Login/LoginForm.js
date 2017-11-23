import React, { Component } from 'react'
import { Form, FormGroup, Col } from 'reactstrap'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'
import { Field, reduxForm, SubmissionError } from 'redux-form'

import validate from '../../config/validator'
import { TextInput } from '../../components/Input'
import Text from '../../components/Text'
import Button from '../../components/Button'

import API from '../../api'
import login from '../../store/actions/login'

const LoginButton = glamorous(Button)({
  width: '50%',
  minHeight: '50px'
})

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit (values, dispatch) {
    const userDetails = {
      email: values.email,
      password: values.password
    }
    console.log(values)
    return API.login(userDetails)
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
          dispatch(login(response.data.user))
        }
      })
  }

  render () {
    const { handleSubmit, submitting } = this.props
    return (
      <Form className='mt-1 floating-labels' onSubmit={handleSubmit(this.submit)}>
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
          name='password'
          type='password'
          id='password'
          label='Password'
          component={TextInput}
          validate={[validate.required]}
        />
        <FormGroup row className='pb-4'>
          <Col lg={12}>
            <input id='remember' type='checkbox' className='filled-in form-control' />
            <label htmlFor='remember'>Remember me</label>
          </Col>
        </FormGroup>
        <Col lg={12} className='mt-3 text-center'>
          <LoginButton color='primary' type='submit' disabled={submitting}>
            Login
          </LoginButton>
          <Text tag='h5' className='mt-3'>New to bitrefill? <Link to='/signup'>Signup</Link></Text>
        </Col>
      </Form>
    )
  }
}

export default reduxForm({ form: 'LoginForm' })(LoginForm)
