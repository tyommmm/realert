import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from '../components/Alert/Alert';

export default {
  title: 'Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  heading: 'Success',
  message: 'Your changes are saved successfully.',
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  heading: 'Warning',
  message: 'Username you entered is invalid.',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  heading: 'Error',
  message: 'Error has occured while saving changes.',
};

export const Info = Template.bind({});
Info.args = {
  status: 'info',
  heading: 'Info',
  message: 'New settings available on your account.',
};
