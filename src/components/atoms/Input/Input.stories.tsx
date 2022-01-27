import { ComponentStory } from '@storybook/react';
import Input from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const NumberInput = Template.bind({});
NumberInput.args = {
  value: 0,
  type: 'number',
};
