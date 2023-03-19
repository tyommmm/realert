import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "../components/Alert/Alert";
import Toast from "../components/Toast/Toast";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  color: "green",
  label: "Success",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "orange",
  label: "Warning",
};

export const Error = Template.bind({});
Error.args = {
  color: "red",
  label: "Error",
};
