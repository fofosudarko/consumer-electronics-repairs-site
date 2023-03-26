// GeolocationDialog.stories.js

import GeolocationDialog from './GeolocationDialog';

const Story = {
  title: 'Lib/GeolocationDialog',
  component: GeolocationDialog,
};

const Template = (args) => {
  return (
    <GeolocationDialog
      {...args}
      onGetCurrentPosition={(position) => console.log(position)}
    />
  );
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
