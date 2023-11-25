import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
import PageLayout from './components/PageLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="results" exact element={<SearchResultsPage />} />
            <Route path="about" exact element={<AboutPage />} />
            <Route
              path="clinic-profile/:clinicId"
              exact
              element={<ClinicProfilePage />}
            />
          </Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
