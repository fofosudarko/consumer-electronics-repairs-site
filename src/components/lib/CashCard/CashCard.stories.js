// CashCard.stories.js

import CashCard from './CashCard';

const Story = {
  title: 'Lib/CashCard',
  component: CashCard,
};

const Template = (args) => {
  return <CashCard {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
