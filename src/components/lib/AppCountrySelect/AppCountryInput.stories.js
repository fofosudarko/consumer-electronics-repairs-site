// AppCountrySelect.stories.js

import AppCountrySelect from './AppCountrySelect';

const Story = {
  title: 'Lib/AppCountrySelect',
  component: AppCountrySelect,
};

const Template = (args) => {
  return <AppCountrySelect {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
