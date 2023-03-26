// GadgetsSection.stories.js

import GadgetsSection from './GadgetsSection';

const Story = {
  title: 'Pages/SiteGadgetsSection',
  component: GadgetsSection,
};

const Template = (args) => {
  return <GadgetsSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
