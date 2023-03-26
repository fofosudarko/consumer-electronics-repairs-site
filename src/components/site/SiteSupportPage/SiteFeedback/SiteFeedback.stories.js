// SiteFeedback.stories.js

import SiteFeedback from './SiteFeedback';

const Story = {
  title: 'Site/SiteFeedback',
  component: SiteFeedback,
};

const Template = (args) => {
  return <SiteFeedback {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
