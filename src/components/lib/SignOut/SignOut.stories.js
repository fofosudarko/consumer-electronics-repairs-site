// SignOut.stories.js

import SignOut from './SignOut';

const Story = {
  title: 'Lib/SignOut',
  component: SignOut,
};

const Template = (args) => {
  return <SignOut {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
