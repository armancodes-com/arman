import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const ButtonComponent: Story = {
  render: (args) => <Button {...args}>click me</Button>,
  args: {
    color: "#eee",
    onClick: () => console.log("Button clicked"),
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export const ButtonDisabled: Story = {
  render: (args) => <Button {...args}>click me</Button>,
  args: {
    disabled: true,
    onClick: () => console.log("Button clicked"),
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};
