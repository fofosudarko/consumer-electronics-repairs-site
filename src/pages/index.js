// index.js

import { useHomeRedirect } from 'src/hooks';

import { getSiteLayout } from 'src/layouts/site/SiteLayout/SiteLayout';
import { SiteHomePage } from 'src/components/site';

export default function SiteHome() {
  useHomeRedirect();
  return <SiteHomePage />;
}

SiteHome.getLayout = getSiteLayout;
