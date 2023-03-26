// ConfirmSignUpPage.stories.js

import ConfirmSignUpPage from './ConfirmSignUpPage';

const Story = {
  title: 'Auth/ConfirmSignUpPage',
  component: ConfirmSignUpPage,
};

const Template = (args) => {
  return <ConfirmSignUpPage {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  show: true,
};

export default Story;
