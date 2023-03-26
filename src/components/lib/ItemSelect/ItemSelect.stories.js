// ItemSelect.stories.js

import ItemSelect from './ItemSelect';

const Story = {
  title: 'Lib/ItemSelect',
  component: ItemSelect,
};

const Template = (args) => <ItemSelect {...args} />;

export const Main = Template.bind({});
Main.args = {};

export default Story;
