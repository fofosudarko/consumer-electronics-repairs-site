// SiteAboutPage.stories.js

import SiteAboutPage from './SiteAboutPage';

const Story = {
  title: 'Pages/SiteAbout',
  component: SiteAboutPage,
};

const Template = (args) => {
  return <SiteAboutPage {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
