// SaveButton.stories.js

import SaveButton from './SaveButton';

const Story = {
  title: 'Lib/ControlButtons/SaveButton',
  component: SaveButton,
};

const Template = (args) => {
  return <SaveButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
