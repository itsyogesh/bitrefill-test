import React, { Component } from 'react'
import { Card as RCard, CardTitle } from 'reactstrap'
import glamorous from 'glamorous'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import SignupForm from './SignupForm'
import Text from '../../components/Text'

const Card = glamorous(RCard)({
  borderRadius: 3,
  borderWidth: 1,
  maxWidth: '50vw',
  padding: '1.5rem'
})

class Signup extends Component {
  render () {
    if (this.props.auth.isAuthenticated) {
      return (<Redirect to='/' />)
    }
    return (
      <Card body className='mt-5 mx-auto'>
        <CardTitle className='mb-3'><Text tag='h4' weight='bold'>Create an account </Text></CardTitle>
        <SignupForm />
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Signup)
