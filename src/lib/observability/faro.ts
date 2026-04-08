import { matchRoutes } from 'react-router-dom';
import {
  ReactIntegration,
  createReactRouterV7DataOptions,
  faro,
  getWebInstrumentations,
  initializeFaro,
} from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';
import packageJson from '../../../package.json';

/**
 * The `/collect/<id>` segment is Grafana’s per–Frontend-app ingest key (not a secret; it routes RUM to that app).
 * Must match Observability → Frontend → posadskiy-website → Instrumentation. Allowlist site origins under that app’s CORS.
 */
const DEFAULT_FARO_COLLECT_URL =
  'https://faro-collector-prod-eu-west-2.grafana.net/collect/451ee59b19fd23cfa38502c8993ecf6a';

function resolveFaroCollectorUrl(): string | undefined {
  const override = import.meta.env.VITE_FARO_URL as string | undefined;
  if (override != null && override !== '') {
    return override;
  }
  if (import.meta.env.PROD) {
    return DEFAULT_FARO_COLLECT_URL;
  }
  return undefined;
}

const faroUrl = resolveFaroCollectorUrl();

/**
 * Initialise Grafana Faro RUM. Call at the very top of main.tsx, before React renders.
 * Production uses the default collector URL unless `VITE_FARO_URL` overrides it.
 * Dev server skips Faro unless you set `VITE_FARO_URL` (avoids polluting prod FE data).
 */
export function initFaro(): void {
  if (!faroUrl) {
    return;
  }

  initializeFaro({
    url: faroUrl,
    app: {
      name: 'posadskiy-website',
      version: (import.meta.env.VITE_APP_VERSION as string | undefined) ?? packageJson.version,
      environment: import.meta.env.MODE,
    },
    sessionTracking: {
      samplingRate: 1.0,
    },
    instrumentations: [
      ...getWebInstrumentations({
        captureConsole: true,
        enablePerformanceInstrumentation: true,
      }),
      new TracingInstrumentation(),
      new ReactIntegration({
        router: createReactRouterV7DataOptions({
          matchRoutes,
        }),
      }),
    ],
  });
}

export { faro };
