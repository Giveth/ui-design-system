import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { D2 } from '../../../components/typography/displays/D2';

export default {
	title: 'Example/D2',
	component: D2,
} as ComponentMeta<typeof D2>;

const Template: ComponentStory<typeof D2> = args => (
	<D2 {...args}>
		{args.title || 'Was he a beast if music could move him so?'}
	</D2>
);

export const Example = Template.bind({});
