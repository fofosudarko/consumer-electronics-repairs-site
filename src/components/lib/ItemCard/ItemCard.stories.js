// ItemCard.stories.js

import ItemCard from './ItemCard';

const Story = {
  title: 'Lib/ItemCard',
  component: ItemCard,
};

const Template = (args) => {
  return <ItemCard {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  value: 'Hello, World',
};

export default Story;
