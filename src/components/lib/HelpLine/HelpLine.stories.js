// HelpLine.stories.js

import HelpLine from './HelpLine';

const Story = {
  title: 'Lib/HelpLine',
  component: HelpLine,
};

const Template = (args) => {
  return <HelpLine {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  iconName: 'play',
  text: 'Play/Start stream',
};

export default Story;
