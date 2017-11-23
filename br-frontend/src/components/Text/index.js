import React from 'react'

import { sizes, weights } from '../../styles/typography'
import colors from '../../styles/colors'

const Text = (props) => {
  const {tag: Tag, color, weight, uppercased, inverse, className, children} = props

  const style = {
    fontSize: Tag && Object.keys(sizes).indexOf(Tag) > -1 ? sizes[Tag] : sizes.p,
    fontWeight: weights.regular,
    color: colors.black,
    textTransform: uppercased ? 'uppercase' : 'none'
  }

  if (weight && Object.keys(weights).indexOf(weight) > -1) {
    style['fontWeight'] = weights[weight]
  }

  if (color) {
    style['color'] = color
  }

  if (inverse) {
    style['color'] = colors.white
  }

  return (
    <Tag className={className} style={style}>{children}</Tag>
  )
}

export default Text
