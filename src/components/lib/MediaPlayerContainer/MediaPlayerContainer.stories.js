// MediaPlayerContainer.stories.js

import MediaPlayerContainer from './MediaPlayerContainer';

const Story = {
  title: 'Lib/MediaPlayerContainer',
  component: MediaPlayerContainer,
};

const Template = (args) => {
  return <MediaPlayerContainer {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  show: true,
  videoProps: {
    src:
      'https://knoxxi.s3.eu-west-2.amazonaws.com/kenesis/tester3/full-stream-20210914183314.mkv',
  },
};

export default Story;
