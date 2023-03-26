// PaymentsSection.stories.js

import PaymentsSection from './PaymentsSection';

const Story = {
  title: 'Pages/SiteRepairersProgramPaymentsSection',
  component: PaymentsSection,
};

const Template = (args) => {
  return <PaymentsSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
