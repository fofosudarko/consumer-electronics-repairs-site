// PauseButton.stories.js

import PauseButton from './PauseButton';

const Story = {
  title: 'Lib/ControlButtons/PauseButton',
  component: PauseButton,
};

const Template = (args) => {
  return <PauseButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
