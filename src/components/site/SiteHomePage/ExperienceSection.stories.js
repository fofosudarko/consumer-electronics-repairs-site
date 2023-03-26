// ExperienceSection.stories.js

import ExperienceSection from './ExperienceSection';

const Story = {
  title: 'Pages/SiteExperienceSection',
  component: ExperienceSection,
};

const Template = (args) => {
  return <ExperienceSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
