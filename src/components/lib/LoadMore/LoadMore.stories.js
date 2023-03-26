// LoadMore.stories.js

import LoadMore from './LoadMore';

const Story = {
  title: 'Lib/LoadMore',
  component: LoadMore,
};

const Template = (args) => {
  return <LoadMore {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  iconName: 'play',
  text: 'Play/Start stream',
};

export default Story;
