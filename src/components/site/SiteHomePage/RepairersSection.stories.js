// RepairersSection.stories.js

import RepairersSection from './RepairersSection';

const Story = {
  title: 'Pages/SiteRepairersSection',
  component: RepairersSection,
};

const Template = (args) => {
  return <RepairersSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
