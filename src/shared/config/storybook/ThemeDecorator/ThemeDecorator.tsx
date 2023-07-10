import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) =>
  function story(StoryComponent: Story) {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };
