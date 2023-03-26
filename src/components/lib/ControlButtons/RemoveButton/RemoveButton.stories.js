// RemoveButton.stories.js

import RemoveButton from './RemoveButton';

const Story = {
  title: 'Lib/ControlButtons/RemoveButton',
  component: RemoveButton,
};

const Template = (args) => {
  return <RemoveButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
