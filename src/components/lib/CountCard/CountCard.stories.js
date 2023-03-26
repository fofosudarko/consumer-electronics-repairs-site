// CountCard.stories.js

import CountCard from './CountCard';

const Story = {
  title: 'Lib/CountCard',
  component: CountCard,
};

const Template = (args) => {
  return <CountCard {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
