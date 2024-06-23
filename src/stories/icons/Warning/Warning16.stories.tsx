import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWarning16 } from '../../../components/icons/Warning/Warning16';

export default {
	title: 'Example/Icons/Warning/Warning16',
	component: IconWarning16,
} as ComponentMeta<typeof IconWarning16>;

const Template: ComponentStory<typeof IconWarning16> = args => (
	<IconWarning16 {...args} />
);

export const Warning16 = Template.bind({});
Warning16.args = {
	color: 'white',
	size: 16,
};
