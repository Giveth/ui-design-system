import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { D1 } from '../../../components/typography/displays/D1';

export default {
  title: 'Example/D1',
  component: D1,
} as ComponentMeta<typeof D1>;

const Template: ComponentStory<typeof D1> = (args) => <D1 {...args}>{args.label || 'Was he a beast if music could move him so?'}</D1>;


export const Example = Template.bind({});