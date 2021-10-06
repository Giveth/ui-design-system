import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { H4 } from '../../../components/typography/headlines/H4';

export default {
  title: 'Example/H4',
  component: H4,
  argTypes: {
    weight: { options: [500, 700, 900],control:  { type: 'radio' } },
  },
} as ComponentMeta<typeof H4>;

const Template: ComponentStory<typeof H4> = (args) => <H4 {...args}>{args.label || 'Was he a beast if music could move him so?'}</H4>;


export const Heading4 = Template.bind({});
Heading4.args = {
  weight: 500,
};