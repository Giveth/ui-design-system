import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from '../../../components/typography/body/Title';

export default {
	title: 'Example/Title',
	component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => (
	<Title {...args}>
		{args.title || 'Was he a beast if music could move him so?'}
	</Title>
);

export const Example = Template.bind({});
