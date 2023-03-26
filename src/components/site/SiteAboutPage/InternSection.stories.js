// InternSection.stories.js

import InternSection from './InternSection';

const Story = {
  title: 'Pages/SiteAboutInternSection',
  component: InternSection,
};

const Template = (args) => {
  return <InternSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
