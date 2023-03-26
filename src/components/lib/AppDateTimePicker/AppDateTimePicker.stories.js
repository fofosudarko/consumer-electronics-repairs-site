// AppDateTimePicker.stories.js

import AppDateTimePicker from './AppDateTimePicker';

const Story = {
  title: 'Lib/AppDateTimePicker',
  component: AppDateTimePicker,
};

const Template = (args) => {
  return <AppDateTimePicker {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
