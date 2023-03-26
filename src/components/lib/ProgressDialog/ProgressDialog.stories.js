// ProgressDialog.stories.js

import ProgressDialog from './ProgressDialog';

const Story = {
  title: 'Lib/ProgressDialog',
  component: ProgressDialog,
};

const Template = (args) => {
  return <ProgressDialog {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
