import React from 'react'
import { Card as RCard, CardTitle } from 'reactstrap'
import glamorous from 'glamorous'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Text from '../../components/Text'
import LoginForm from './LoginForm'

const Card = glamorous(RCard)({
  borderRadius: 3,
  borderWidth: 1,
  maxWidth: '45vw',
  padding: '2rem'
})

const Login = ({ auth }) => {
  if (auth.isAuthenticated) {
    return (<Redirect to='/' />)
  }
  return (
    <Card body className='mt-5 mx-auto'>
      <CardTitle className='mb-3'><Text tag='h4' weight='bold'>Login to your account </Text></CardTitle>
      <LoginForm />
    </Card>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Login)
