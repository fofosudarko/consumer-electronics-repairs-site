// EditButton.stories.js

import EditButton from './EditButton';

const Story = {
  title: 'Lib/ControlButtons/EditButton',
  component: EditButton,
};

const Template = (args) => {
  return <EditButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
