import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './contexts/NavigationContext';
import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { Page404 } from './pages/Page404';
import { PAGES } from './constants/pages';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <NavigationProvider>
      <Layout loading={loading}>
        <Routes>
          <Route path={PAGES.MAIN.url} element={<MainPage />} />
          <Route path={PAGES.PROJECTS.url} element={<ProjectsPage />} />
          <Route path={PAGES.SERVICES.url} element={<ServicesPage />} />
          <Route path={PAGES.CONTACT.url} element={<ContactPage setLoading={setLoading} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
    </NavigationProvider>
  );
}

export default App;

