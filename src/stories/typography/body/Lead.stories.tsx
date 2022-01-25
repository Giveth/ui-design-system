import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Lead } from '../../../components/typography/body/Lead';

export default {
	title: 'Example/Lead',
	component: Lead,
} as ComponentMeta<typeof Lead>;

const Template: ComponentStory<typeof Lead> = args => (
	<Lead {...args}>
		{args.label || 'Was he a beast if music could move him so?'}
	</Lead>
);

export const Example = Template.bind({});
