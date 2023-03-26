// HeaderSection.stories.js

import HeaderSection from './HeaderSection';

const Story = {
  title: 'Pages/SiteAboutHeaderSection',
  component: HeaderSection,
};

const Template = (args) => {
  return <HeaderSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
