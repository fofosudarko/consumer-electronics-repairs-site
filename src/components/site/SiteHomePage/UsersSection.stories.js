// UsersSection.stories.js

import UsersSection from './UsersSection';

const Story = {
  title: 'Pages/SiteUsersSection',
  component: UsersSection,
};

const Template = (args) => {
  return <UsersSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
