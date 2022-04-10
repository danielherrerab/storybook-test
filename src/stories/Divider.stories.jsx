import Divider, { dividerAlignments, dividerLineStyles, dividerWeights } from '../components/Divider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: Divider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
}

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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Dividers = (args) => {
  return dividerTests.map((test, id) =>
    <div key={id} style={{ display: 'block', margin: '20px' }}>
      <Divider
        {...args}
        alignment={test.alignment && test.alignment}
        lineStyle={test.lineStyle && test.lineStyle}
        weight={test.weight && test.weight}
      >
        {test.children}
      </Divider>
    </div>
  )
}
