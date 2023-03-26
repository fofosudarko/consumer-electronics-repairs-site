// AppLayout.stories.js

import AppLayout from './AppLayout';

const Story = {
  title: 'Layouts/AppLayout',
  component: AppLayout,
};

const Template = (args) => {
  return <AppLayout {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
