import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationProvider } from './contexts/NavigationContext';
import { Layout } from './components/Layout';
import type { AppOutletContext } from './types/outlet';

export function RootLayout() {
  const [loading, setLoading] = useState(false);
  const outletContext: AppOutletContext = { setLoading };

  return (
    <NavigationProvider>
      <Layout loading={loading}>
        <Outlet context={outletContext} />
      </Layout>
    </NavigationProvider>
  );
}
