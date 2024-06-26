import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWarning64 } from '../../../components/icons/Warning/Warning64';

export default {
	title: 'Example/Icons/Warning/Warning64',
	component: IconWarning64,
} as ComponentMeta<typeof IconWarning64>;

const Template: ComponentStory<typeof IconWarning64> = args => (
	<IconWarning64 {...args} />
);

export const Warning64 = Template.bind({});
Warning64.args = {
	color: 'white',
	size: 64,
};
