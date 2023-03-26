// SitePage.stories.js

import SitePage from './SitePage';

const Story = {
  title: 'Pages/Site',
  component: SitePage,
};

const Template = (args) => {
  return <SitePage {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
