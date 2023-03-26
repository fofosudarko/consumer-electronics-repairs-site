// LocationsSection.stories.js

import LocationsSection from './LocationsSection';

const Story = {
  title: 'Pages/SiteLocationsSection',
  component: LocationsSection,
};

const Template = (args) => {
  return <LocationsSection {...args} />;
};

export const Main = Template.bind({});
Main.args = {};

export default Story;
