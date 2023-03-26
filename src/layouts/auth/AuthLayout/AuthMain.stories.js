// AuthMain.stories.js

import AuthMain from './AuthMain';

const Story = {
  title: 'Layouts/AuthMain',
  component: AuthMain,
};

const Template = (args) => {
  return <AuthMain {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
