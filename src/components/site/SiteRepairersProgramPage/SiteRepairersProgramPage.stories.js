// SiteRepairersProgramPage.stories.js

import SiteRepairersProgramPage from './SiteRepairersProgramPage';

const Story = {
  title: 'Pages/SiteRepairersProgram',
  component: SiteRepairersProgramPage,
};

const Template = (args) => {
  return <SiteRepairersProgramPage {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
