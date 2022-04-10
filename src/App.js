import './scss/App.scss'
import Button, { buttonVariants } from './components/Button'
import Divider, { dividerAlignments, dividerLineStyles, dividerWeights } from './components/Divider'
const dividerTests = [
  ...dividerAlignments.map(align => {
    return {
      alignment: align,
      children: <span><i className={`bi bi-align-${align}`} /> {align}</span> // Test text with icons
    }
  }),
  ...dividerLineStyles.map(style => {
    return {
      lineStyle: style,
      children: style // Test string
    }
  }),
  ...dividerWeights.map(weight => {
    return {
      weight: weight,
      children: <span style={{ padding: '5px', border: '1px solid currentColor' }}>{weight}</span> // Test html element
    }
  })
]

function App () {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Testing Components</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <h2>Large Buttons</h2>
          </div>
          {buttonVariants.map((variant) =>
            <div key={variant} className='col-12 col-sm-4 col-lg-3 mb-3'>
              <Button variant={variant} size='lg'>Button {variant} Lg</Button>
            </div>
          )}
        </div>
        <div className='row'>
          <div className='col-12'>
            <h2>Small Buttons</h2>
          </div>
          {buttonVariants.map((variant) =>
            <div key={variant} className='col-12 col-sm-4 col-lg-3 mb-3'>
              <Button variant={variant} size='sm'>Button {variant} Sms</Button>
            </div>
          )}
        </div>
        <div className='row'>
          <div className='col-12'>
            <h2>Divider</h2>
          </div>
          {dividerTests.map((test, id) =>
            <div key={id} style={{ display: 'block', margin: '20px' }}>
              <Divider
                alignment={test.alignment && test.alignment}
                lineStyle={test.lineStyle && test.lineStyle}
                weight={test.weight && test.weight}
              >
                {test.children}
              </Divider>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default App
