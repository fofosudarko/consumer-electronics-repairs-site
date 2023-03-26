// SkipButton.stories.js

import SkipButton from './SkipButton';

const Story = {
  title: 'Lib/ControlButtons/SkipButton',
  component: SkipButton,
};

const Template = (args) => {
  return <SkipButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  text: 'Skip',
};

export default Story;
