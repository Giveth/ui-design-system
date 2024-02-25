import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutlineButton } from '../components/buttons/OutlineButton';

export default {
	title: 'Example/Button',
	component: OutlineButton,
} as ComponentMeta<typeof OutlineButton>;

const Template: ComponentStory<typeof OutlineButton> = args => (
	<OutlineButton {...args}>{args.title}</OutlineButton>
);

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
	buttonType: 'primary',
	label: 'Outline Primary',
	size: 'medium',
	disabled: false,
	loading: false,
};

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
	buttonType: 'secondary',
	label: 'Outline Secondary',
	size: 'medium',
	disabled: false,
	loading: false,
};
