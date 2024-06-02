import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconGIVBack24 } from '../../../components/icons/giv-economy/Back/Back24';

export default {
	title: 'Example/Icons/GIVEconomyBack/GIVEconomyBack24',
	component: IconGIVBack24,
} as ComponentMeta<typeof IconGIVBack24>;

const Template: ComponentStory<typeof IconGIVBack24> = args => (
	<IconGIVBack24 {...args} />
);

export const GIVEconomyBack24 = Template.bind({});
GIVEconomyBack24.args = {
	color: 'white',
	size: 24,
};
