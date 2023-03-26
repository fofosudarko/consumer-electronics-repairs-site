// SyncButton.stories.js

import SyncButton from './SyncButton';

const Story = {
  title: 'Lib/ControlButtons/SyncButton',
  component: SyncButton,
};

const Template = (args) => {
  return <SyncButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
