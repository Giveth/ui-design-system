import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutlineLinkButton } from '../components/buttonLinks/OulineButtonLink';

export default {
	title: 'Example/ButtonLink',
	component: OutlineLinkButton,
} as ComponentMeta<typeof OutlineLinkButton>;

const Template: ComponentStory<typeof OutlineLinkButton> = args => (
	<OutlineLinkButton {...args}>{args.label}</OutlineLinkButton>
);

export const OulinePrimary = Template.bind({});
OulinePrimary.args = {
	buttonType: 'primary',
	label: 'Ouline Primary',
	size: 'medium',
	disabled: false,
};

export const OulineSecondary = Template.bind({});
OulineSecondary.args = {
	buttonType: 'secondary',
	label: 'Ouline Secondary',
	size: 'medium',
	disabled: false,
};
