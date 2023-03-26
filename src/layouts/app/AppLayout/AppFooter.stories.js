// AppFooter.stories.js

import { useAuthStore } from 'src/stores/auth';

import AppFooter from './AppFooter';

const Story = {
  title: 'Layouts/AppFooter',
  component: AppFooter,
};

const Template = (args) => {
  const appUser = useAuthStore((state) => state.appUser ?? {});
  return <AppFooter {...args} appUser={appUser} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
