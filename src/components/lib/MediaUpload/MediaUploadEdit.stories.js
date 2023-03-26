// MediaUploadEdit.stories.js

import MediaUploadEdit from './MediaUploadEdit';

const Story = {
  title: 'Lib/MediaUpload/Edit',
  component: MediaUploadEdit,
};

const Template = (args) => {
  return <MediaUploadEdit {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
