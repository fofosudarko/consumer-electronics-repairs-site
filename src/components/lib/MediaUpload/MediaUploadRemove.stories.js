// MediaUploadRemove.stories.js

import MediaUploadRemove from './MediaUploadRemove';

const Story = {
  title: 'Lib/MediaUpload/Remove',
  component: MediaUploadRemove,
};

const Template = (args) => {
  return <MediaUploadRemove {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
