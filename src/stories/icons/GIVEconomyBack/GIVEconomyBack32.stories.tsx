import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconGIVBack32 } from '../../../components/icons/giv-economy/Back/Back32';

export default {
	title: 'Example/Icons/GIVEconomyBack/GIVEconomyBack32',
	component: IconGIVBack32,
} as ComponentMeta<typeof IconGIVBack32>;

const Template: ComponentStory<typeof IconGIVBack32> = args => (
	<IconGIVBack32 {...args} />
);

export const GIVEconomyBack32 = Template.bind({});
GIVEconomyBack32.args = {
	color: 'white',
	size: 32,
};
