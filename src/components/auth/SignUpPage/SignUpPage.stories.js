// SignUpPage.stories.js

import SignUpPage from './SignUpPage';

const Story = {
  title: 'Auth/SignUpPage',
  component: SignUpPage,
};

const Template = (args) => {
  return <SignUpPage {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  show: true,
};

export default Story;
