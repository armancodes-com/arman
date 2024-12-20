import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export default meta;

export const InputComponent: Story = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Enter your input",
    value: "",
  },
  argTypes: {
    hasSearchIcon: {
      control: "boolean",
      description: "Toggles the search icon",
    },
  },
};

export const InputComponentWithIcon: Story = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Enter your input",
    value: "",
    hasSearchIcon: true,
  },
  argTypes: {
    hasSearchIcon: {
      control: "boolean",
      description: "Toggles the search icon",
    },
  },
};
