import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWarning } from '../../../components/icons/Warning/Warning';

export default {
	title: 'Example/Icons/Warning/Warning',
	component: IconWarning,
} as ComponentMeta<typeof IconWarning>;

const Template: ComponentStory<typeof IconWarning> = args => (
	<IconWarning {...args} />
);

export const Warning = Template.bind({});
Warning.args = {
	color: 'white',
	size: 24,
};
