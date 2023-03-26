// FaqsSection.stories.js

import FaqsSection from './FaqsSection';

const Story = {
  title: 'Pages/SiteFaqsFaqsSection',
  component: FaqsSection,
};

const Template = (args) => {
  return <FaqsSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
