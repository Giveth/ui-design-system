import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Overline } from '../../components/typography/Overline';

export default {
	title: 'Example/Overline',
	component: Overline,
} as ComponentMeta<typeof Overline>;

const Template: ComponentStory<typeof Overline> = args => (
	<Overline {...args}>Link</Overline>
);

export const Small = Template.bind({});
Small.args = {
	styleType: 'Small',
};

export const Regular = Template.bind({});
Regular.args = {
	styleType: 'Regular',
};

export const Italic = Template.bind({});
Italic.args = {
	styleType: 'Italic',
};
