// support.js

import { useHomeRedirect } from 'src/hooks';

import { getSiteLayout } from 'src/layouts/site/SiteLayout/SiteLayout';
import { SiteSupportPage } from 'src/components/site';

export default function SiteSupport() {
  useHomeRedirect();
  return <SiteSupportPage />;
}

SiteSupport.getLayout = getSiteLayout;
