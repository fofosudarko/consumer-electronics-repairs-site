// SiteFooter.stories.js

import SiteFooter from './SiteFooter';

const Story = {
  title: 'Layouts/SiteFooter',
  component: SiteFooter,
};

const Template = (args) => {
  return <SiteFooter {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
