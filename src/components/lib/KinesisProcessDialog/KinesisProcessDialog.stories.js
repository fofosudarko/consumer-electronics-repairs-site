// KinesisProcessDialog.stories.js

import KinesisProcessDialog from './KinesisProcessDialog';

const Story = {
  title: 'Lib/KinesisProcessDialog',
  component: KinesisProcessDialog,
};

const Template = (args) => {
  return <KinesisProcessDialog {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
