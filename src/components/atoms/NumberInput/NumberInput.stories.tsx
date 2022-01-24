import NumberInput from './';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/NumberInput',
  component: NumberInput,
}

const Template: ComponentStory<typeof NumberInput> = (args) => <NumberInput {...args} />

export const Default = Template.bind({});
Default.args = {
  value: 0,
}