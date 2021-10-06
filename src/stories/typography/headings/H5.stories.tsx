import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { H5 } from '../../../components/typography/headlines/H5';

export default {
  title: 'Example/H5',
  component: H5,
  argTypes: {
    weight: { options: [500, 700, 900],control:  { type: 'radio' } },
  },
} as ComponentMeta<typeof H5>;

const Template: ComponentStory<typeof H5> = (args) => <H5 {...args}>{args.label || 'Was he a beast if music could move him so?'}</H5>;


export const Heading5 = Template.bind({});
Heading5.args = {
  weight: 500,
};
