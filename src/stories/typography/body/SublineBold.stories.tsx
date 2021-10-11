import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SublineBold } from '../../../components/typography/body/SublineBold';

export default {
  title: 'Example/SublineBold',
  component: SublineBold,
} as ComponentMeta<typeof SublineBold>;

const Template: ComponentStory<typeof SublineBold> = (args) => <SublineBold {...args}>{args.label || 'Was he a beast if music could move him so?'}</SublineBold>;


export const Example = Template.bind({});