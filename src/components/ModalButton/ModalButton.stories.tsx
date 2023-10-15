import type { Meta, StoryObj } from "@storybook/react";

import { ModalButton } from "./ModalButton";
import { Button } from "@chakra-ui/react";
import { type } from "os";

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Button> = {
  title: "App/ModalButton",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof ModalButton>;

const data: FakeData[] = [{}];
