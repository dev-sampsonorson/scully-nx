import '@scullyio/scully-plugin-puppeteer';

import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
export const config: ScullyConfig = {
  projectRoot: "./apps/scully-nx/src",
  projectName: "scully-nx",
  distFolder: "dist/apps/scully-nx",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
  }
};
