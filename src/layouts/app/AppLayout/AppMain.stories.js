// AppMain.stories.js

import AppMain from './AppMain';

const Story = {
  title: 'Layouts/AppMain',
  component: AppMain,
};

const Template = (args) => {
  return <AppMain {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
