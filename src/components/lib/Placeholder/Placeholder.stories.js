// Placeholder.stories.js

import Placeholder from './Placeholder';

const Story = {
  title: 'Lib/Placeholder',
  component: Placeholder,
};

const Template = (args) => {
  return <Placeholder {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  iconName: 'play',
  text: 'Play/Start stream',
};

export default Story;
