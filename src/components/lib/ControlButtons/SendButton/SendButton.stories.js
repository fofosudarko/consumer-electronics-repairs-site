// SendButton.stories.js

import SendButton from './SendButton';

const Story = {
  title: 'Lib/ControlButtons/SendButton',
  component: SendButton,
};

const Template = (args) => {
  return <SendButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
