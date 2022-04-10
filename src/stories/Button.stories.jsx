import Button, { buttonVariants } from '../components/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Buttons = (args) => {
  return buttonVariants.map((variant) =>
    <div key={variant} style={{ display: 'block', margin: '10px' }}>
      <Button {...args} variant={variant}>Button {variant} {args.size && args.size}</Button>
    </div>
  )
}
