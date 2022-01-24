import Img from './';
import { ComponentStory } from '@storybook/react';
import imageSrc from '../../../resources/images/apple.jpeg';

export default {
  title: 'Atoms/Img',
  component: Img,
}

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const AppleImage = Template.bind({})
AppleImage.args = {
  src: imageSrc
}