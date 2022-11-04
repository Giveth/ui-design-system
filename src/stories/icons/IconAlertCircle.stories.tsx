import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconAlertCircle } from '../../components/icons/AlertCircle/AlertCircle';

export default {
	title: 'Example/Icons/AlertCircle',
	component: IconAlertCircle,
} as ComponentMeta<typeof IconAlertCircle>;

const Template: ComponentStory<typeof IconAlertCircle> = args => (
	<IconAlertCircle {...args} />
);

export const ArrowLeft = Template.bind({});
ArrowLeft.storyName = 'AlertCircle';
ArrowLeft.args = {
	color: 'white',
	size: 32,
};
