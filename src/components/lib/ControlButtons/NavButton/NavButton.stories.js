// NavButton.stories.js

import NavButton from './NavButton';

const Story = {
  title: 'Lib/ControlButtons/NavButton',
  component: NavButton,
};

const Template = (args) => {
  return <NavButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
