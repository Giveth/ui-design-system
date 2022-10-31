import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconConfig } from '../../components';

export default {
	title: 'Example/Icons/Config',
	component: IconConfig,
} as ComponentMeta<typeof IconConfig>;

const Template: ComponentStory<typeof IconConfig> = args => (
	<IconConfig {...args} />
);

export const Config = Template.bind({});
Config.storyName = 'Config';
Config.args = {
	color: 'white',
	size: 24,
};
