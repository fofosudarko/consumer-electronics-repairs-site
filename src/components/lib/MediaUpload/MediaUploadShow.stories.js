// MediaUploadShow.stories.js

import MediaUploadShow from './MediaUploadShow';

const Story = {
  title: 'Lib/MediaUpload/Show',
  component: MediaUploadShow,
};

const Template = (args) => {
  return <MediaUploadShow {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
