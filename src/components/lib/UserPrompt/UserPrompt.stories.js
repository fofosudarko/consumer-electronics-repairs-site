// UserPrompt.stories.js

import UserPrompt from './UserPrompt';

const Story = {
  title: 'Lib/UserPrompt',
  component: UserPrompt,
};

const Template = (args) => {
  return <UserPrompt {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
