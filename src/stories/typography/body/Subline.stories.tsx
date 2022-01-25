import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Subline } from '../../../components/typography/body/Subline';

export default {
	title: 'Example/Subline',
	component: Subline,
} as ComponentMeta<typeof Subline>;

const Template: ComponentStory<typeof Subline> = args => (
	<Subline {...args}>
		{args.label || 'Was he a beast if music could move him so?'}
	</Subline>
);

export const Example = Template.bind({});
