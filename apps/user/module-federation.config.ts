import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'user',
  exposes: {
    './Routes': 'apps/user/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
