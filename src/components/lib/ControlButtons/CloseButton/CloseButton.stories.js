// CloseButton.stories.js

import CloseButton from './CloseButton';

const Story = {
  title: 'Lib/ControlButtons/CloseButton',
  component: CloseButton,
};

const Template = (args) => {
  return <CloseButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
