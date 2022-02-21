// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory } from '@storybook/react';
import Img from '.';
import imageSrc from '../../../resources/images/apple.jpeg';

export default {
  title: 'Atoms/Img',
  component: Img,
};

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const AppleImage = Template.bind({});
AppleImage.args = {
  src: imageSrc,
};
