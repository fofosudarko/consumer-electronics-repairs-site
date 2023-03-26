// CreateButton.stories.js

import CreateButton from './CreateButton';

const Story = {
  title: 'Lib/ControlButtons/CreateButton',
  component: CreateButton,
};

const Template = (args) => {
  return <CreateButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
