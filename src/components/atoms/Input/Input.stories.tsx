import Input from './';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Input',
  component: Input,
}

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({});
Default.args = {
  value: 0,
}