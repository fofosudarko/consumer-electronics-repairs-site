// InviteButton.stories.js

import InviteButton from './InviteButton';

const Story = {
  title: 'Lib/ControlButtons/InviteButton',
  component: InviteButton,
};

const Template = (args) => {
  return <InviteButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
