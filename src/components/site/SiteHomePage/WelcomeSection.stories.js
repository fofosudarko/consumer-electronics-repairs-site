// WelcomeSection.stories.js

import WelcomeSection from './WelcomeSection';

const Story = {
  title: 'Pages/SiteWelcomeSection',
  component: WelcomeSection,
};

const Template = (args) => {
  return <WelcomeSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
