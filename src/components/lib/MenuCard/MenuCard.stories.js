// MenuCard.stories.js

import MenuCard from './MenuCard';

const Story = {
  title: '/MenuCard',
  component: MenuCard,
};

const Template = (args) => {
  return <MenuCard {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
