import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OulineButton } from '../components/buttons/OulineButton';

export default {
	title: 'Example/Button',
	component: OulineButton,
} as ComponentMeta<typeof OulineButton>;

const Template: ComponentStory<typeof OulineButton> = args => (
	<OulineButton {...args}>{args.label}</OulineButton>
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
