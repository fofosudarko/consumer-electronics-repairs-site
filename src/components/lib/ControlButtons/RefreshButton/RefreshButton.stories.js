// RefreshButton.stories.js

import RefreshButton from './RefreshButton';

const Story = {
  title: 'Lib/ControlButtons/RefreshButton',
  component: RefreshButton,
};

const Template = (args) => {
  return <RefreshButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
