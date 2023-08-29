import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconGift } from '../../components';

export default {
	title: 'Example/Icons/Gift',
	component: IconGift,
} as ComponentMeta<typeof IconGift>;

const Template: ComponentStory<typeof IconGift> = args => (
	<IconGift {...args} />
);

export const ArrowLeft = Template.bind({});
ArrowLeft.storyName = 'Gift';
ArrowLeft.args = {
	color: 'white',
	size: 32,
};
