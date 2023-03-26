// FileUploadButton.stories.js

import FileUploadButton from './FileUploadButton';

const Story = {
  title: 'Lib/ControlButtons/FileUploadButton',
  component: FileUploadButton,
};

const Template = (args) => {
  return <FileUploadButton {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
