// UpdatePasswordPage.stories.js

import UpdatePasswordPage from './UpdatePasswordPage';

const Story = {
  title: 'Auth/UpdatePasswordPage',
  component: UpdatePasswordPage,
};

const Template = (args) => {
  return <UpdatePasswordPage {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  show: true,
};

export default Story;
