import { CacheProvider } from '@emotion/react';
import React from 'react';

import { makeMuiCache } from './src/theme/cache';

const cache = makeMuiCache();

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>{element}</CacheProvider>
);
