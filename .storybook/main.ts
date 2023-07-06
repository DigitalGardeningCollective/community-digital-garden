import type { StorybookConfig } from "@storybook/nextjs";
const path = require('path');
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve ? config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src/"),
    } : null
    return config;
  }
};
export default config;
