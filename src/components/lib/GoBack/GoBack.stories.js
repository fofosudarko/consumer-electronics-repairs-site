// GoBack.stories.js

import GoBack from './GoBack';

const Story = {
  title: 'Lib/ControlButtons/GoBack',
  component: GoBack,
};

const Template = (args) => {
  return <GoBack {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
