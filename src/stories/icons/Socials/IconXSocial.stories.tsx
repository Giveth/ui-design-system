import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconXSocial24 } from '../../../components/social-icons/XSocial/XSocial24';

export default {
	title: 'Example/Icons/Social/IconXSocial',
	component: IconXSocial24,
} as ComponentMeta<typeof IconXSocial24>;

const Template: ComponentStory<typeof IconXSocial24> = args => (
	<IconXSocial24 {...args} />
);

export const ArrowLeft = Template.bind({});
ArrowLeft.storyName = 'X';
ArrowLeft.args = {
	color: 'white',
	size: 32,
};
