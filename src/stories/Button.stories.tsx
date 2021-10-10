import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  label: 'Primary',
  size: 'medium',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  label: 'Secondary',
  size: 'medium',
  disabled: false,
};

export const Texty = Template.bind({});
Texty.args = {
  buttonType: 'texty',
  label: 'Texty',
  size: 'medium',
  disabled: false,
};