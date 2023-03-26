// WelcomeText.stories.js

import WelcomeText from './WelcomeText';

const Story = {
  title: 'Lib/WelcomeText',
  component: WelcomeText,
};

const Template = (args) => {
  return <WelcomeText {...args} />;
};

export const Main = Template.bind({});
Main.args = {
  text: (
    <>
      Hello, we&apos;re excited
      <br /> you&apos;re here!
    </>
  ),
};

export default Story;
