// ShowButton.stories.js

import ShowButton from './ShowButton';

const Story = {
  title: 'Lib/ControlButtons/ShowButton',
  component: ShowButton,
};

const Template = (args) => {
  return <ShowButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
