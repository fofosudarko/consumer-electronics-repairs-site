// AppContainer.stories.js

import AppContainer from './AppContainer';

const Story = {
  title: 'Lib/AppContainer',
  component: AppContainer,
};

const Template = (args) => {
  return <AppContainer {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
