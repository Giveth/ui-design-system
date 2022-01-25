import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Caption } from '../../../components/typography/body/Caption';

export default {
	title: 'Example/Caption',
	component: Caption,
} as ComponentMeta<typeof Caption>;

const Template: ComponentStory<typeof Caption> = args => (
	<Caption {...args}>
		{args.label || 'Was he a beast if music could move him so?'}
	</Caption>
);

export const Example = Template.bind({});
