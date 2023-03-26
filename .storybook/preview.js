import * as NextImage from 'next/image';
import {
  MINIMAL_VIEWPORTS,
  INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import 'src/styles/main.scss';
import 'src/styles/site.scss';
import 'animate.css';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { AppProvider, NotificationProvider } from '../src/context';
import { NotificationContainer } from '../src/components/lib';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: { ...MINIMAL_VIEWPORTS, ...INITIAL_VIEWPORTS } },
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => {
    return (
      <AppProvider>
        <NotificationProvider>
          <NotificationContainer>
            <Story />
          </NotificationContainer>
        </NotificationProvider>
      </AppProvider>
    );
  },
];
