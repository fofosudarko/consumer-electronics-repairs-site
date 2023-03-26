// Avatar.stories.js

import Avatar from './Avatar';

const Story = {
  title: 'Lib/Avatar',
  component: Avatar,
};

const Template = (args) => {
  return <Avatar {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  avatar: null,
};

export default Story;
