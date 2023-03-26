// AppPhoneInput.stories.js

import AppPhoneInput from './AppPhoneInput';

const Story = {
  title: 'Lib/AppPhoneInput',
  component: AppPhoneInput,
};

const Template = (args) => {
  return <AppPhoneInput {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
