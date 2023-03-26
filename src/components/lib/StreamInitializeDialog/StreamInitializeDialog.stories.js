// StreamInitializeDialog.stories.js

import StreamInitializeDialog from './StreamInitializeDialog';

const Story = {
  title: 'Lib/StreamInitializeDialog',
  component: StreamInitializeDialog,
};

const Template = (args) => {
  return <StreamInitializeDialog {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
