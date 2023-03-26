// ViewButton.stories.js

import ViewButton from './ViewButton';

const Story = {
  title: 'Lib/ControlButtons/ViewButton',
  component: ViewButton,
};

const Template = (args) => {
  return <ViewButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
