import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWarning32 } from '../../../components/icons/Warning/Warning32';

export default {
	title: 'Example/Icons/Warning/Warning32',
	component: IconWarning32,
} as ComponentMeta<typeof IconWarning32>;

const Template: ComponentStory<typeof IconWarning32> = args => (
	<IconWarning32 {...args} />
);

export const Warning32 = Template.bind({});
Warning32.args = {
	color: 'white',
	size: 32,
};
