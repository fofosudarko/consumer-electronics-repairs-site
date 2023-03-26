// index.js

import { useHomeRedirect } from 'src/hooks';

import { getSiteLayout } from 'src/layouts/site/SiteLayout/SiteLayout';
import { SiteRepairersProgramPage } from 'src/components/site';

export default function SiteRepairersProgram() {
  useHomeRedirect();
  return <SiteRepairersProgramPage />;
}

SiteRepairersProgram.getLayout = getSiteLayout;
