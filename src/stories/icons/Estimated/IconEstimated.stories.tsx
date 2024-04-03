import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconEstimated24 } from '../../../components';

export default {
	title: 'Example/Icons/Estimated/Estimated',
	component: IconEstimated24,
} as ComponentMeta<typeof IconEstimated24>;

const Template: ComponentStory<typeof IconEstimated24> = args => (
	<IconEstimated24 {...args} />
);

export const Estimated = Template.bind({});
Estimated.args = {
	color: 'green',
	size: 24,
};
