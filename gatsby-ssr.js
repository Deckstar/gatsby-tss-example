import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { makeMuiCache } from './src/theme/cache';

/** @param {import('gatsby').ReplaceRendererArgs} args */
export const replaceRenderer = (args) => {
  const { bodyComponent, replaceBodyHTMLString, setHeadComponents } = args;

  const muiCache = makeMuiCache();
  const { extractCriticalToChunks } = createEmotionServer(muiCache);

  const emotionStyles = extractCriticalToChunks(
    renderToString(
      <CacheProvider value={muiCache}>{bodyComponent}</CacheProvider>
    )
  );

  const muiStyleTags = emotionStyles.styles.map((style) => {
    const { css, key, ids } = style || {};
    return (
      <style
        key={key}
        data-emotion={`${key} ${ids.join(` `)}`}
        dangerouslySetInnerHTML={{ __html: css }}
      />
    );
  });

  setHeadComponents(muiStyleTags);

  // render the result from `extractCritical`
  replaceBodyHTMLString(emotionStyles.html);
};
