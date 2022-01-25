import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconArrowCircleLeft } from '../../../components/icons/arrowCircles/ArrowCircleLeft';

export default {
	title: 'Example/Icons/ArrowCircle',
	component: IconArrowCircleLeft,
} as ComponentMeta<typeof IconArrowCircleLeft>;

const Template: ComponentStory<typeof IconArrowCircleLeft> = args => (
	<IconArrowCircleLeft {...args} />
);

export const ArrowCircleLeft = Template.bind({});
ArrowCircleLeft.storyName = 'Left';
ArrowCircleLeft.args = {
	color: 'white',
	size: 32,
};
