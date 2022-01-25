import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SemiTitle } from '../../../components/typography/body/SemiTitle';

export default {
	title: 'Example/SemiTitle',
	component: SemiTitle,
} as ComponentMeta<typeof SemiTitle>;

const Template: ComponentStory<typeof SemiTitle> = args => (
	<SemiTitle {...args}>
		{args.label || 'Was he a beast if music could move him so?'}
	</SemiTitle>
);

export const Example = Template.bind({});
