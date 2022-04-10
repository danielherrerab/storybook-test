import PropTypes from 'prop-types'

/**
 * Primary UI component for user interaction
 */
const Button = ({ children, variant, outline, size, ...props }) => {
  return (
    <button
      type='button'
      className={['btn', `btn-${variant}`, `btn-${size}`].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export const buttonVariants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'link',
  'outline-primary',
  'outline-secondary',
  'outline-success',
  'outline-danger',
  'outline-warning',
  'outline-info',
  'outline-light',
  'outline-dark'
]

Button.propTypes = {
  /**
   * Button contents
   * Modified to children prop instead label, in case that button component needs to have more than justs a string
   */
  children: PropTypes.any,
  /**
   * whitch variant should the button have?
   */
  variant: PropTypes.oneOf(buttonVariants),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['lg', 'sm']),
  /**
   * is the button active?
   */
  active: PropTypes.bool,
  /**
   * is the button disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
}

Button.defaultProps = {
  children: '',
  variant: 'primary',
  size: 'lg',
  active: false,
  disabled: false,
  onClick: undefined
}

export default Button
