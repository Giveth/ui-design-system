import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { H1 } from '../../../components/typography/headlines/H1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/H1',
	component: H1,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		weight: { options: [500, 700, 900], control: { type: 'radio' } },
	},
} as ComponentMeta<typeof H1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H1> = args => (
	<H1 {...args}>
		{args.label || 'Was he a beast if music could move him so?'}
	</H1>
);

export const Heading1 = Template.bind({});
Heading1.args = {
	weight: 500,
};

// export const Heading700 = Template.bind({});
// Heading700.args = {
//   weight: 700,
// };

// export const Heading900 = Template.bind({});
// Heading900.args = {
//   weight: 900,
// };
