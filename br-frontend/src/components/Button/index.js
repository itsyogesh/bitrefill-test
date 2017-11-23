import { Button as RButton } from 'reactstrap'
import glamorous from 'glamorous'
import { weights } from '../../styles/typography'

const Button = glamorous(RButton)({
  paddingLeft: '1.5em',
  paddingRight: '1.5em',
  borderRadius: 3,
  cursor: 'pointer',
  fontWeight: weights.light
})

export default Button
