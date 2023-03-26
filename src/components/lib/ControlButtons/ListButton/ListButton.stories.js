// ListButton.stories.js

import ListButton from './ListButton';

const Story = {
  title: 'Lib/ControlButtons/ListButton',
  component: ListButton,
};

const Template = (args) => {
  return <ListButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
