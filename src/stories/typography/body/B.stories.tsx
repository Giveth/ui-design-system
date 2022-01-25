import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { B } from '../../../components/typography/body/B';

export default {
	title: 'Example/B',
	component: B,
} as ComponentMeta<typeof B>;

const Template: ComponentStory<typeof B> = args => (
	<B {...args}>
		{args.label || 'Was he a beast if music could move him so?'}
	</B>
);

export const Example = Template.bind({});
