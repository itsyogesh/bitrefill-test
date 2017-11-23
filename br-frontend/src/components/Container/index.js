import { Container as RContainer } from 'reactstrap'
import glamorous from 'glamorous'

import colors from '../../styles/colors'

const Container = glamorous(RContainer)(props => {
  const style = {}
  if (props.fluid) {
    style['paddingLeft'] = 0
    style['paddingRight'] = 0
  }

  if (props.lightBg) {
    style['backgroundColor'] = colors.lightGray
  }

  return style
})

export default Container
