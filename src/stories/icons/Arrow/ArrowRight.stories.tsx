import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowRight } from '../../../components/icons/arrows/ArrowRight';

export default {
  title: 'Example/Icons/Arrow',
  component: IconArrowRight,
} as ComponentMeta<typeof IconArrowRight>;

const Template: ComponentStory<typeof IconArrowRight> = (args) => <IconArrowRight {...args}/>;

export const ArrowRight = Template.bind({});
ArrowRight.storyName = 'Right'
ArrowRight.args = {
  color: 'white',
  size: 32,
};