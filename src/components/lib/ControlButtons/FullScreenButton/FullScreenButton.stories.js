// FullScreenButton.stories.js

import FullScreenButton from './FullScreenButton';

const Story = {
  title: 'Lib/ControlButtons/FullScreenButton',
  component: FullScreenButton,
};

const Template = (args) => {
  return <FullScreenButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
