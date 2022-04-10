import PropTypes from 'prop-types'
import './styles.scss'

const Divider = ({ children, alignment, lineStyle, weight, ...props }) => {
  return (
    <div
      className={['divider', `divider--align-${alignment}`, `divider--style-${lineStyle}`, `divider--weight-${weight}`].join(' ')}
      {...props}
    >
      <hr className='divider__hr' />
      <div className='divider__content'>
        {children}
      </div>
      <hr className='divider__hr' />
    </div>
  )
}

export const dividerAlignments = ['start', 'center', 'end']
export const dividerLineStyles = ['solid', 'dashed', 'dotted']
export const dividerWeights = ['light', 'regular', 'heavy']

Divider.propTypes = {
  children: PropTypes.any,
  /**
   * Where is going to be aligned the children?
   */
  alignment: PropTypes.oneOf(dividerAlignments),
  /**
   * What style should have the divider line?
   */
  lineStyle: PropTypes.oneOf(dividerLineStyles),
  /**
   * Which weight should have the divider?
   */
  weight: PropTypes.oneOf(dividerWeights)
}

Divider.defaultProps = {
  children: '',
  alignment: 'center',
  lineStyle: 'solid',
  weight: 'regular'
}

export default Divider
