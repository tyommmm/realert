import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toast from "../components/Toast/Toast";

export default {
  title: "Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  status: "success",
  title: "Success",
  text: "Your changes are saved successfully.",
};

export const Warning = Template.bind({});
Warning.args = {
  status: "warning",
  title: "Warning",
  text: "Username you entered is invalid.",
};

export const Error = Template.bind({});
Error.args = {
  status: "error",
  title: "Error",
  text: "Error has occured while saving changes.",
};

export const Info = Template.bind({});
Info.args = {
  status: "info",
  title: "Info",
  text: "New settings available on your account.",
};
