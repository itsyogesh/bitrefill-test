import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import { connect } from 'react-redux'

import Notification from '../components/Notification'
import { removeNotification } from '../store/actions/notifications'

const List = glamorous.ul({
  position: 'fixed',
  bottom: 24,
  right: 24,
  minWidth: 240
})

const Notifications = ({ removeNotification, notifications }) => (
  <List>
    {notifications.map(notification => {
      const { id } = notification
      return (
        <Notification
          key={id}
          {...notification}
          onDismissClick={() => removeNotification(id)}
        />
      )
    })}
  </List>
)

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeNotification: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  notifications: state.notifications
})

export default connect(mapStateToProps, { removeNotification })(Notifications)
