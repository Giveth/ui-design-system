import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDonation24 } from '../../../components/icons/Donation/Donation24';

export default {
	title: 'Example/Icons/Donation/Donation24',
	component: IconDonation24,
} as ComponentMeta<typeof IconDonation24>;

const Template: ComponentStory<typeof IconDonation24> = args => (
	<IconDonation24 {...args} />
);

export const Donation24 = Template.bind({});
Donation24.args = {
	color: 'white',
	size: 24,
};
