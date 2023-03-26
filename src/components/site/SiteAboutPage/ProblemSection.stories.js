// ProblemSection.stories.js

import ProblemSection from './ProblemSection';

const Story = {
  title: 'Pages/SiteAboutProblemSection',
  component: ProblemSection,
};

const Template = (args) => {
  return <ProblemSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
