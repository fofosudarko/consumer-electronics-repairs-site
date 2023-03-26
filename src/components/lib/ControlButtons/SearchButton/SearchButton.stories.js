// SearchButton.stories.js

import SearchButton from './SearchButton';

const Story = {
  title: 'Lib/ControlButtons/SearchButton',
  component: SearchButton,
};

const Template = (args) => {
  return <SearchButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
