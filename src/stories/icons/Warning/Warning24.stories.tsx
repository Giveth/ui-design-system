import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconWarning24 } from '../../../components/icons/Warning/Warning24';

export default {
	title: 'Example/Icons/Warning/Warning24',
	component: IconWarning24,
} as ComponentMeta<typeof IconWarning24>;

const Template: ComponentStory<typeof IconWarning24> = args => (
	<IconWarning24 {...args} />
);

export const Warning24 = Template.bind({});
Warning24.args = {
	color: 'white',
	size: 24,
};
