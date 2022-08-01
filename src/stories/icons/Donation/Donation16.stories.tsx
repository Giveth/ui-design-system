import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDonation16 } from '../../../components/icons/Donation/Donation16';

export default {
	title: 'Example/Icons/Donation/Donation16',
	component: IconDonation16,
} as ComponentMeta<typeof IconDonation16>;

const Template: ComponentStory<typeof IconDonation16> = args => (
	<IconDonation16 {...args} />
);

export const Donation16 = Template.bind({});
Donation16.args = {
	color: 'white',
	size: 16,
};
