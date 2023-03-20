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
  heading: "Success",
  message: "Your changes are saved successfully.",
  position: "topL",
};

export const Warning = Template.bind({});
Warning.args = {
  status: "warning",
  heading: "Warning",
  message: "Username you entered is invalid.",
  position: "topR",
};

export const Error = Template.bind({});
Error.args = {
  status: "error",
  heading: "Error",
  message: "Error has occured while saving changes.",
  position: "bottomL",
};

export const Info = Template.bind({});
Info.args = {
  status: "info",
  heading: "Info",
  message: "New settings available on your account.",
  position: "bottomR",
};
