import React from 'react'
import { FormGroup, Col } from 'reactstrap'

const TextInput = ({
  input,
  label,
  type,
  id,
  helpBlock,
  meta: { touched, error, warning }
}) => (
  <FormGroup row className={touched && error ? 'has-error' : null}>
    <Col lg={12}>
      <input
        id={id}
        className={`form-control ${input.value && input.value.length ? 'float float-value' : 'float'}`}
        {...input}
        type={type}
      />
      <span className='bar' />
      <label htmlFor={id}>{label}</label>
      {touched && helpBlock && error && <span className='help-block'><small>{error}</small></span>}
    </Col>
  </FormGroup>
)

export default TextInput
