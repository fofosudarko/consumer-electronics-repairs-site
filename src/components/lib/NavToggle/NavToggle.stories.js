// NavToggle.stories.js

import NavToggle from './NavToggle';

const Story = {
  title: 'Lib/NavToggle',
  component: NavToggle,
};

const Template = (args) => {
  return <NavToggle {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
