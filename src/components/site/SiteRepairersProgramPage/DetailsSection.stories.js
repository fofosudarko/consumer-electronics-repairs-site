// DetailsSection.stories.js

import DetailsSection from './DetailsSection';

const Story = {
  title: 'Pages/SiteRepairersProgramDetailsSection',
  component: DetailsSection,
};

const Template = (args) => {
  return <DetailsSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
