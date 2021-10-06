import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { H6 } from '../components/typography/headlines/H6';

export default {
  title: 'Example/H6',
  component: H6,
  argTypes: {
    weight: { options: [500, 700, 900],control:  { type: 'radio' } },
  },
} as ComponentMeta<typeof H6>;

const Template: ComponentStory<typeof H6> = (args) => <H6 {...args}>{args.label || 'Was he a beast if music could move him so?'}</H6>;


export const Heading6 = Template.bind({});
Heading6.args = {
  weight: 500,
}
