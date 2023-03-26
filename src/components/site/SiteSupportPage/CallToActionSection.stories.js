// CallToActionSection.stories.js

import CallToActionSection from './CallToActionSection';

const Story = {
  title: 'Pages/SiteFaqsCallToActionSection',
  component: CallToActionSection,
};

const Template = (args) => {
  return <CallToActionSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
