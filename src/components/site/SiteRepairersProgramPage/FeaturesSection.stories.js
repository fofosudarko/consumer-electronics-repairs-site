// FeaturesSection.stories.js

import FeaturesSection from './FeaturesSection';

const Story = {
  title: 'Pages/SiteRepairersProgramFeaturesSection',
  component: FeaturesSection,
};

const Template = (args) => {
  return <FeaturesSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
