import type { Preview } from "@storybook/html";
import "@/styles/global.css";
import "@/styles/default-colors.css";
import "@/styles/default-sizes.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;
