import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonLink } from '../components/buttonLinks/ButtonLink';


export default {
	title: 'Example/ButtonLink',
	component: ButtonLink,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = args => (
	<ButtonLink {...args}>{args.label}</ButtonLink>
);

export const Primary = Template.bind({});
Primary.args = {
	linkType: 'primary',
	label: 'Primary',
	size: 'medium',
	disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
	linkType: 'secondary',
	label: 'Secondary',
	size: 'medium',
	disabled: false,
};

export const Texty = Template.bind({});
Texty.args = {
	linkType: 'texty',
	label: 'Texty',
	size: 'medium',
	disabled: false,
};
