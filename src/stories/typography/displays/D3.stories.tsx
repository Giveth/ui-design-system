import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { D3 } from '../../../components/typography/displays/D3';

export default {
  title: 'Example/D3',
  component: D3,
} as ComponentMeta<typeof D3>;

const Template: ComponentStory<typeof D3> = (args) => <D3 {...args}>{args.label || 'Was he a beast if music could move him so?'}</D3>;


export const Example = Template.bind({});