import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { PrimaryNavbar as Primary } from '../components/Navigation'

const PrimaryNavbar = ({ auth }) => (
  <Primary isAuthenticated={auth.isAuthenticated} user={auth.user} />
)

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps, null)(PrimaryNavbar))
