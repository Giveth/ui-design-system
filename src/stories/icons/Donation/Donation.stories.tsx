import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDonation } from '../../../components/icons/Donation/Donation';

export default {
	title: 'Example/Icons/Donation/Donation',
	component: IconDonation,
} as ComponentMeta<typeof IconDonation>;

const Template: ComponentStory<typeof IconDonation> = args => (
	<IconDonation {...args} />
);

export const Donation = Template.bind({});
Donation.args = {
	color: 'white',
	size: 24,
};
