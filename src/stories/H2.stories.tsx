import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { H2 } from '../components/typography/headlines/H2';

export default {
  title: 'Example/H2',
  component: H2,
  argTypes: {
    weight: { options: [500, 700, 900],control:  { type: 'radio' } },
  },
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = (args) => <H2 {...args}>{args.label || 'Was he a beast if music could move him so?'}</H2>;


export const Heading2 = Template.bind({});
Heading2.args = {
  weight: 500,
};