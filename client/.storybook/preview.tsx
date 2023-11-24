import type { Decorator, Preview, StoryObj } from "@storybook/react";
import React from "react";
import { FluentProvider, webDarkTheme } from "@fluentui/react-components";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <FluentProvider theme={webDarkTheme}>
        <Story />
      </FluentProvider>
    ),
  ],
};

export default preview;
