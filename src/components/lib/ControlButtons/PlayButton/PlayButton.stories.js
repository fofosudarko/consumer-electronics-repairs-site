// PlayButton.stories.js

import PlayButton from './PlayButton';

const Story = {
  title: 'Lib/ControlButtons/PlayButton',
  component: PlayButton,
};

const Template = (args) => {
  return <PlayButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
