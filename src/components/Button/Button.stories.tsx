import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import DefaultButton, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: DefaultButton,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['default', 'inherit', 'primary', 'secondary']
      }
    }
  },
} as Meta;

export const PrimaryButton = (args: any) => <DefaultButton label="Hello world" {...args} />;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <DefaultButton {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "Secondary 😇" };