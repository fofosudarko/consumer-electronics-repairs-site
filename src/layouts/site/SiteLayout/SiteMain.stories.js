// SiteMain.stories.js

import SiteMain from './SiteMain';

const Story = {
  title: 'Layouts/SiteMain',
  component: SiteMain,
};

const Template = (args) => {
  return <SiteMain {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
