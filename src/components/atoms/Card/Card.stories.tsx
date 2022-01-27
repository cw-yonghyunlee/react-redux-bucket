import { ComponentStory } from '@storybook/react';
import Card from '.';

export default {
  title: 'Atoms/Card',
  component: Card,
};

export const TextCard: ComponentStory<typeof Card> = () => <Card>Card Contents</Card>;
