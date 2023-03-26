// SolutionSection.stories.js

import SolutionSection from './SolutionSection';

const Story = {
  title: 'Pages/SiteAboutSolutionSection',
  component: SolutionSection,
};

const Template = (args) => {
  return <SolutionSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
