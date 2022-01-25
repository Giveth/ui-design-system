import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowLeft } from '../../../components/icons/arrows/ArrowLeft';

export default {
	title: 'Example/Icons/Arrow',
	component: IconArrowLeft,
} as ComponentMeta<typeof IconArrowLeft>;

const Template: ComponentStory<typeof IconArrowLeft> = args => (
	<IconArrowLeft {...args} />
);

export const ArrowLeft = Template.bind({});
ArrowLeft.storyName = 'Left';
ArrowLeft.args = {
	color: 'white',
	size: 32,
};
