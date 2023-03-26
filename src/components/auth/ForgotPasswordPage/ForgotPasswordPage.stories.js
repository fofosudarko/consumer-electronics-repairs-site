// ForgotPasswordPage.stories.js

import ForgotPasswordPage from './ForgotPasswordPage';

const Story = {
  title: 'Auth/ForgotPasswordPage',
  component: ForgotPasswordPage,
};

const Template = (args) => {
  return <ForgotPasswordPage {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  show: true,
};

export default Story;
