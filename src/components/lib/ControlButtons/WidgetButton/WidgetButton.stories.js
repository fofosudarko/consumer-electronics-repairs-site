// WidgetButton.stories.js

import WidgetButton from './WidgetButton';

const Story = {
  title: 'Lib/ControlButtons/WidgetButton',
  component: WidgetButton,
};

const Template = (args) => {
  return <WidgetButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
