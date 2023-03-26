// IntroSection.stories.js

import IntroSection from './IntroSection';

const Story = {
  title: 'Pages/SiteAboutIntroSection',
  component: IntroSection,
};

const Template = (args) => {
  return <IntroSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
