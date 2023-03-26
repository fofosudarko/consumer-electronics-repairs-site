// SignInPage.stories.js

import SignInPage from './SignInPage';

const Story = {
  title: 'Auth/SignInPage',
  component: SignInPage,
};

const Template = (args) => {
  return <SignInPage {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  show: true,
};

export default Story;
