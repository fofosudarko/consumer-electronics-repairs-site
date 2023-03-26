// SiteLayout.stories.js

import SiteLayout from './SiteLayout';

const Story = {
  title: 'Layouts/SiteLayout',
  component: SiteLayout,
};

const Template = (args) => {
  return <SiteLayout {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
