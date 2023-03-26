// AuthLayout.stories.js

import AuthLayout from './AuthLayout';

const Story = {
  title: 'Layouts/AuthLayout',
  component: AuthLayout,
};

const Template = (args) => {
  return <AuthLayout {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
