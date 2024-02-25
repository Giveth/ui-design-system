import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Lead } from '../../../components/typography/body/Lead';

export default {
	title: 'Example/Lead',
	component: Lead,
} as ComponentMeta<typeof Lead>;

const Template: ComponentStory<typeof Lead> = args => (
	<Lead {...args}>
		{args.title || 'Was he a beast if music could move him so?'}
	</Lead>
);

export const Medium = Template.bind({});
Medium.args = {
	size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
	size: 'large',
};
