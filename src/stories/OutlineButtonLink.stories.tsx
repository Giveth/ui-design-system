import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutlineLinkButton } from '../components/buttonLinks/OutlineButtonLink';

export default {
	title: 'Example/ButtonLink',
	component: OutlineLinkButton,
} as ComponentMeta<typeof OutlineLinkButton>;

const Template: ComponentStory<typeof OutlineLinkButton> = args => (
	<OutlineLinkButton {...args}>{args.label}</OutlineLinkButton>
);

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
	buttonType: 'primary',
	label: 'Outline Primary',
	size: 'medium',
	disabled: false,
};

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
	buttonType: 'secondary',
	label: 'Outline Secondary',
	size: 'medium',
	disabled: false,
};
