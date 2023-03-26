// MediaUploadCreate.stories.js

import MediaUploadCreate from './MediaUploadCreate';

const Story = {
  title: 'Lib/MediaUpload/Create',
  component: MediaUploadCreate,
};

const Template = (args) => {
  return <MediaUploadCreate {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
