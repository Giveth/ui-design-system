import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { P } from '../../../components/typography/body/P';

export default {
  title: 'Example/P',
  component: P,
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args}>{args.label || 'Was he a beast if music could move him so?'}</P>;


export const Example = Template.bind({});