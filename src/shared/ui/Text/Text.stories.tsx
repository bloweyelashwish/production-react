import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleWithText = Template.bind({});
TitleWithText.args = { title: 'Title', text: 'Text' };

export const TitleWithTextError = Template.bind({});
TitleWithTextError.args = {
  title: 'Title',
  text: 'Text',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = { title: 'Title' };

export const OnlyText = Template.bind({});
OnlyText.args = { text: 'Text' };

export const TitleWithTextDark = Template.bind({});
TitleWithTextDark.args = { title: 'Title', text: 'Text' };
TitleWithTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = { title: 'Title' };
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = { text: 'Text' };
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
