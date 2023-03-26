// SiteFeedbackInput.stories.js

import SiteFeedbackInput from './SiteFeedbackInput';

const Story = {
  title: 'Site/SiteFeedbackInput',
  component: SiteFeedbackInput,
};

const Template = (args) => {
  return <SiteFeedbackInput {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
