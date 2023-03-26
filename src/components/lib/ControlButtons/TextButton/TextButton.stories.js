// TextButton.stories.js

import TextButton from './TextButton';

const Story = {
  title: 'Lib/ControlButtons/TextButton',
  component: TextButton,
};

const Template = (args) => {
  return <TextButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
