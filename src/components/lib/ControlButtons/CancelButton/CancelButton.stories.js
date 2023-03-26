// CancelButton.stories.js

import CancelButton from './CancelButton';

const Story = {
  title: 'Lib/ControlButtons/CancelButton',
  component: CancelButton,
};

const Template = (args) => {
  return <CancelButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
