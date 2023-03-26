// SiteHeader.stories.js

import { useAuthStore } from 'src/stores/auth';

import SiteHeader from './SiteHeader';

const Story = {
  title: 'Layouts/SiteHeader',
  component: SiteHeader,
};

const Template = (args) => {
  const appUser = useAuthStore((state) => state.appUser);
  return <SiteHeader {...args} appUser={appUser} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
