// BadgesList.stories.js

import BadgesList from './BadgesList';

const Story = {
  title: 'Lib/BadgesList',
  component: BadgesList,
};

const Template = (args) => {
  return <BadgesList {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  items: ['Apple', 'Samsung', 'Oppo'],
};

export default Story;
