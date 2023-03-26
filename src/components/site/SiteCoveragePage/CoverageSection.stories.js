// CoverageSection.stories.js

import CoverageSection from './CoverageSection';

const Story = {
  title: 'Pages/SiteCoverageSection',
  component: CoverageSection,
};

const Template = (args) => {
  return <CoverageSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
