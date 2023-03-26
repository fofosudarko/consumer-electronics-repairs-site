// RecordButton.stories.js

import RecordButton from './RecordButton';

const Story = {
  title: 'Lib/ControlButtons/RecordButton',
  component: RecordButton,
};

const Template = (args) => {
  return <RecordButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
