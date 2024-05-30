import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconGIVBack } from '../../../components/icons/giv-economy/Back/Back';

export default {
	title: 'Example/Icons/GIVEconomyBack/GIVEconomyBack',
	component: IconGIVBack,
} as ComponentMeta<typeof IconGIVBack>;

const Template: ComponentStory<typeof IconGIVBack> = args => (
	<IconGIVBack {...args} />
);

export const GIVEconomyBack = Template.bind({});
GIVEconomyBack.args = {
	color: 'white',
	size: 24,
};
