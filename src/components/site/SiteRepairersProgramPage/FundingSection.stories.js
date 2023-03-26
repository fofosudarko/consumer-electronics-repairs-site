// FundingSection.stories.js

import FundingSection from './FundingSection';

const Story = {
  title: 'Pages/SiteRepairersProgramFundingSection',
  component: FundingSection,
};

const Template = (args) => {
  return <FundingSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
