// MediaUploadDialog.stories.js

import MediaUploadDialog from './MediaUploadDialog';

const Story = {
  title: 'Lib/MediaUploadDialog',
  component: MediaUploadDialog,
};

const Template = (args) => {
  return <MediaUploadDialog {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
