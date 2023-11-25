import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomePage,
  SearchResultsPage,
  ClinicProfilePage,
  AboutPage,
} from './pages';
import GlobalStyles from './styles/GlobalStyles';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './api/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/results',
    element: <SearchResultsPage />,
  },
  {
    path: '/clinic-profile/:clinicId',
    element: <ClinicProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
