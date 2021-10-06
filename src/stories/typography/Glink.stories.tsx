import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GLink } from '../../components/typography/GLink';

export default {
  title: 'Example/GLink',
  component: GLink,
} as ComponentMeta<typeof GLink>;

const Template: ComponentStory<typeof GLink> = (args) => <GLink {...args}>Link</GLink>;

export const Tiny = Template.bind({});
Tiny.args = {
  size: 'Tiny'
};

export const Small = Template.bind({});
Small.args = {
  size: 'Small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'Medium'
};

export const Big = Template.bind({});
Big.args = {
  size: 'Big'
};