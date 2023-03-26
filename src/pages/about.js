// about.js

import { useHomeRedirect } from 'src/hooks';

import { getSiteLayout } from 'src/layouts/site/SiteLayout/SiteLayout';
import { SiteAboutPage } from 'src/components/site';

export default function SiteAbout() {
  useHomeRedirect();
  return <SiteAboutPage />;
}

SiteAbout.getLayout = getSiteLayout;
