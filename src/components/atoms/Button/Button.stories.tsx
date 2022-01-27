import { ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Add Cart',
  type: 'default',
};

export const Circle = Template.bind({});
Circle.args = {
  children: '+',
  type: 'circle',
};
