// SiteCoveragePage.stories.js

import SiteCoveragePage from './SiteLocationsPage';

const Story = {
  title: 'Pages/SiteCoverage',
  component: SiteCoveragePage,
};

const Template = (args) => {
  return <SiteCoveragePage {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
