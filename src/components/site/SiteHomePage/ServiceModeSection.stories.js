// ServiceModeSection.stories.js

import ServiceModeSection from './ServiceModeSection';

const Story = {
  title: 'Pages/SiteServiceModeSection',
  component: ServiceModeSection,
};

const Template = (args) => {
  return <ServiceModeSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
