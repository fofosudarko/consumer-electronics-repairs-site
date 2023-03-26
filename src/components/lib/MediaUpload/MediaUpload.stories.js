// MediaUpload.stories.js

import MediaUpload from './MediaUpload';

const Story = {
  title: 'Lib/MediaUpload',
  component: MediaUpload,
};

const Template = (args) => {
  return <MediaUpload {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
