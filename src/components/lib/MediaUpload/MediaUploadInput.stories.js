// MediaUploadInput.stories.js

import MediaUploadInput from './MediaUploadInput';

const Story = {
  title: 'Lib/MediaUpload/Input',
  component: MediaUploadInput,
};

const Template = (args) => {
  return <MediaUploadInput {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
