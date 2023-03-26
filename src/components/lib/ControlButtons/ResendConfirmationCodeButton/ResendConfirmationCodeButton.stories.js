// ResendConfirmationCodeButton.stories.js

import ResendConfirmationCodeButton from './ResendConfirmationCodeButton';

const Story = {
  title: 'Lib/ControlButtons/ResendConfirmationCodeButton',
  component: ResendConfirmationCodeButton,
};

const Template = (args) => {
  return <ResendConfirmationCodeButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
