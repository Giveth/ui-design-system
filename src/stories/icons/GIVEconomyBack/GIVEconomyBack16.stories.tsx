import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconGIVBack16 } from '../../../components/icons/giv-economy/Back/Back16';

export default {
	title: 'Example/Icons/GIVEconomyBack/GIVEconomyBack16',
	component: IconGIVBack16,
} as ComponentMeta<typeof IconGIVBack16>;

const Template: ComponentStory<typeof IconGIVBack16> = args => (
	<IconGIVBack16 {...args} />
);

export const GIVEconomyBack16 = Template.bind({});
GIVEconomyBack16.args = {
	color: 'white',
	size: 16,
};
