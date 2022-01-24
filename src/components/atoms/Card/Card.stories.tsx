import Card from './';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Card',
  component: Card,
}

export const TextCard: ComponentStory<typeof Card> = () => <Card>Card Contents</Card>;
