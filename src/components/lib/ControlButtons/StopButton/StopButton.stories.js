// StopButton.stories.js

import StopButton from './StopButton';

const Story = {
  title: 'Lib/ControlButtons/StopButton',
  component: StopButton,
};

const Template = (args) => {
  return <StopButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
