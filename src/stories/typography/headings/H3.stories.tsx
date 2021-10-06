import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { H3 } from '../../../components/typography/headlines/H3';

export default {
  title: 'Example/H3',
  component: H3,
  argTypes: {
    weight: { options: [500, 700, 900],control:  { type: 'radio' } },
  },
} as ComponentMeta<typeof H3>;

const Template: ComponentStory<typeof H3> = (args) => <H3 {...args}>{args.label || 'Was he a beast if music could move him so?'}</H3>;


export const Heading3 = Template.bind({});
Heading3.args = {
  weight: 500,
};