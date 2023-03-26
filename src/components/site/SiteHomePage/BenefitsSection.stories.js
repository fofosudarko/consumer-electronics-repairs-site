// BenefitsSection.stories.js

import BenefitsSection from './BenefitsSection';

const Story = {
  title: 'Pages/SiteBenefitsSection',
  component: BenefitsSection,
};

const Template = (args) => {
  return <BenefitsSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
