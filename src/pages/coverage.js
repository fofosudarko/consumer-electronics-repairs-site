// index.js

import { useHomeRedirect } from 'src/hooks';

import { getSiteLayout } from 'src/layouts/site/SiteLayout/SiteLayout';
import { SiteCoveragePage } from 'src/components/site';

export default function SiteCoverage() {
  useHomeRedirect();
  return <SiteCoveragePage />;
}

SiteCoverage.getLayout = getSiteLayout;
