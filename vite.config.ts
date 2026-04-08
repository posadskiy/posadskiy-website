import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import faroUploader from '@grafana/faro-rollup-plugin';
import { webcrypto } from 'node:crypto';

if (!globalThis.crypto) {
  Object.defineProperty(globalThis, 'crypto', {
    value: webcrypto,
    configurable: true,
    enumerable: true,
    writable: true,
  });
}

/** From Grafana Cloud → Frontend Observability → posadskiy-website → source map upload snippet. */
const FARO_SOURCEMAP = {
  appName: 'posadskiy-website',
  endpoint: 'https://faro-api-prod-eu-west-2.grafana.net/faro/api/v1',
  appId: '5476',
  stackId: '1586681',
} as const;

// API key: Access Policy with sourcemaps:read + sourcemaps:write (glc_… token).
// https://grafana.com/docs/grafana-cloud/monitor-applications/frontend-observability/sourcemap-upload-plugins/#obtain-an-api-key
const faroToken = process.env.GRAFANA_OBSERVABILITY_FARO_TOKEN;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const enableFaroUpload = mode === 'production' && Boolean(faroToken);

  return {
    plugins: [
      react(),
      enableFaroUpload
        ? faroUploader({
            appName: FARO_SOURCEMAP.appName,
            endpoint: process.env.GRAFANA_OBSERVABILITY_FARO_API_ENDPOINT ?? FARO_SOURCEMAP.endpoint,
            appId: process.env.GRAFANA_OBSERVABILITY_FARO_APP_ID ?? FARO_SOURCEMAP.appId,
            stackId: process.env.GRAFANA_OBSERVABILITY_FARO_STACK_ID ?? FARO_SOURCEMAP.stackId,
            verbose: true,
            apiKey: faroToken!,
            gzipContents: true,
          })
        : false,
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'build',
      sourcemap: 'hidden',
    },
  };
});
