// HelpButton.stories.js

import HelpButton from './HelpButton';

const Story = {
  title: 'Lib/ControlButtons/HelpButton',
  component: HelpButton,
};

const Template = (args) => {
  return <HelpButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
