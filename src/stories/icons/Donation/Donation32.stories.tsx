import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconDonation32 } from '../../../components/icons/Donation/Donation32';

export default {
	title: 'Example/Icons/Donation/Donation32',
	component: IconDonation32,
} as ComponentMeta<typeof IconDonation32>;

const Template: ComponentStory<typeof IconDonation32> = args => (
	<IconDonation32 {...args} />
);

export const Donation32 = Template.bind({});
Donation32.args = {
	color: 'white',
	size: 32,
};
