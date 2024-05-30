import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconGIVBack64 } from '../../../components/icons/giv-economy/Back/Back64';

export default {
	title: 'Example/Icons/GIVEconomyBack/GIVEconomyBack64',
	component: IconGIVBack64,
} as ComponentMeta<typeof IconGIVBack64>;

const Template: ComponentStory<typeof IconGIVBack64> = args => (
	<IconGIVBack64 {...args} />
);

export const GIVEconomyBack64 = Template.bind({});
GIVEconomyBack64.args = {
	color: 'white',
	size: 64,
};
