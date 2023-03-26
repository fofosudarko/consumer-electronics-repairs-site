// index.js

import { useHomeRedirect } from 'src/hooks';

import { getSiteLayout } from 'src/layouts/site/SiteLayout/SiteLayout';
import { SiteLocationsPage } from 'src/components/site';

export default function SiteLocations() {
  useHomeRedirect();
  return <SiteLocationsPage />;
}

SiteLocations.getLayout = getSiteLayout;
