import validator from 'validator'

const validate = {
  required: (value) => (value ? undefined : 'Required'),
  phone: (value) => (validator.isMobilePhone(value, 'any')
    ? undefined : 'Enter a valid mobile number'),
  amount: (value) => (validator.isInt(value, {min: 0, allow_leading_zeroes: false})
    ? undefined : 'Enter a valid amount'),
  email: (value) => (validator.isEmail(value)) ? undefined : 'Enter a valid email'
}

export default validate
