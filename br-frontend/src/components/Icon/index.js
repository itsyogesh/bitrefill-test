import glamorous from 'glamorous'
import colors from '../../styles/colors'

const Icon = glamorous.div(props => ({
  width: props.width || 75,
  height: props.height || 75,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${colors.mediumLightGray}`,
  borderRadius: props.rounded ? '50%' : 3
}))

export default Icon
