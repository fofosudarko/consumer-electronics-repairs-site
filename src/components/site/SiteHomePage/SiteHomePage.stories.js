// SitePage.stories.js

import SitePage from './SiteHomePage';

const Story = {
  title: 'Pages/SiteHome',
  component: SitePage,
};

const Template = (args) => {
  return <SitePage {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
