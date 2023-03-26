// AppHeader.stories.js

import { useAuthStore } from 'src/stores/auth';

import AppHeader from './AppHeader';

const Story = {
  title: 'Layouts/AppHeader',
  component: AppHeader,
};

const Template = (args) => {
  const appUser = useAuthStore((state) => state.appUser ?? {});
  return <AppHeader {...args} appUser={appUser} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
