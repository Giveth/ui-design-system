import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/buttons/Button';

export default {
	title: 'Example/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
	<Button {...args}>{args.title}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
	buttonType: 'primary',
	label: 'Primary',
	size: 'medium',
	disabled: false,
	loading: false,
	onClick: () => alert('Hi Babe'),
};

export const Secondary = Template.bind({});
Secondary.args = {
	buttonType: 'secondary',
	label: 'Secondary',
	size: 'medium',
	disabled: false,
	loading: false,
};

export const Texty = Template.bind({});
Texty.args = {
	buttonType: 'texty',
	label: 'Texty',
	size: 'medium',
	disabled: false,
	loading: false,
};

export const TextyGray = Template.bind({});
TextyGray.args = {
	buttonType: 'texty-gray',
	label: 'Texty',
	size: 'medium',
	disabled: false,
	loading: false,
};

export const TextyPrimary = Template.bind({});
TextyPrimary.args = {
	buttonType: 'texty-primary',
	label: 'Texty',
	size: 'medium',
	disabled: false,
	loading: false,
};

export const TextySecondary = Template.bind({});
TextySecondary.args = {
	buttonType: 'texty-secondary',
	label: 'Texty',
	size: 'medium',
	disabled: false,
	loading: false,
};
