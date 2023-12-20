import { t } from 'i18next';
import React from 'react';
import { createHashRouter } from 'react-router-dom';

import { Spinner } from '../components/atoms/Spinner';
import { Error } from '../components/pages/Error';
import { Host } from '../components/pages/Host';

// eslint-disable-next-line import/no-unresolved
const Movie = React.lazy(() => import('movieMicrofrontend/Movie'));
// eslint-disable-next-line import/no-unresolved
const TvShow = React.lazy(() => import('tvShowMicrofrontend/TvShow'));

export const router = createHashRouter([
  {
    path: '/',
    element: <Host />,
    errorElement: <Error />,
    children: [
      {
        path: 'movie',
        element: (
          <React.Suspense fallback={<Spinner loadingText={t('LOADING_TEXT')} />}>
            <Movie />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: 'tvshow',
        element: (
          <React.Suspense fallback={<Spinner loadingText={t('LOADING_TEXT')} />}>
            <TvShow />
          </React.Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);
