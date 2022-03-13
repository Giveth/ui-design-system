import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconGnosisChain } from '../../../components/currency-icons/GnosisChain';

export default {
	title: 'Example/Icons/Network/GnosisChain',
	component: IconGnosisChain,
} as ComponentMeta<typeof IconGnosisChain>;

const Template: ComponentStory<typeof IconGnosisChain> = args => (
	<IconGnosisChain {...args} />
);

export const GnosisChain = Template.bind({});
GnosisChain.storyName = 'Gnosis Chain';
GnosisChain.args = {
	size: 32,
};
