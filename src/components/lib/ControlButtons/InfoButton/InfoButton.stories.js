// InfoButton.stories.js

import InfoButton from './InfoButton';

const Story = {
  title: 'Lib/ControlButtons/InfoButton',
  component: InfoButton,
};

const Template = (args) => {
  return <InfoButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
