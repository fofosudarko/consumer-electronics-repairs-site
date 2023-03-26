// FilterContainer.stories.js

import FilterContainer from './FilterContainer';

const Story = {
  title: 'Lib/FilterContainer',
  component: FilterContainer,
};

const Template = (args) => {
  return <FilterContainer {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
