// SiteFaqsPage.stories.js

import SiteFaqsPage from './SiteSupportPage';

const Story = {
  title: 'Pages/SiteFaqs',
  component: SiteFaqsPage,
};

const Template = (args) => {
  return <SiteFaqsPage {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
