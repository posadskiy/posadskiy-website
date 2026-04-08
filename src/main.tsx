import { initFaro } from '@/lib/observability/faro';

initFaro();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { withFaroRouterInstrumentation } from '@grafana/faro-react';
import { RootLayout } from './RootLayout';
import { MainPage } from './pages/MainPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ServicesPage } from './pages/ServicesPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { Page404 } from './pages/Page404';
import { ContactRoute } from './routes/ContactRoute';
import './index.css';

const router = withFaroRouterInstrumentation(
  createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: 'projects', element: <ProjectsPage /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'contact', element: <ContactRoute /> },
        { path: 'privacy', element: <PrivacyPolicyPage /> },
        { path: '*', element: <Page404 /> },
      ],
    },
  ]),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
