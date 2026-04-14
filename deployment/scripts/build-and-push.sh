#!/bin/bash
set -e

SERVICE_NAME="posadskiy-website"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"

if [ -z "$DOCKERHUB_USERNAME" ] || [ -z "$DOCKERHUB_TOKEN" ]; then
  echo "Error: DOCKERHUB_USERNAME and DOCKERHUB_TOKEN are required" >&2
  exit 1
fi

if [ $# -lt 1 ]; then
  echo "Usage: $0 <version>" >&2
  echo "Optional: set VITE_WEB3FORMS_ACCESS_KEY for the contact form build." >&2
  echo "Observability: optional VITE_FARO_URL overrides default collector; GRAFANA_OBSERVABILITY_FARO_TOKEN for source map upload." >&2
  exit 1
fi

VERSION=$1

BUILD_ARGS=()
if [ -n "${VITE_WEB3FORMS_ACCESS_KEY:-}" ]; then
  BUILD_ARGS+=(--build-arg "VITE_WEB3FORMS_ACCESS_KEY=$VITE_WEB3FORMS_ACCESS_KEY")
fi

if [ -n "${VITE_FARO_URL:-}" ]; then
  BUILD_ARGS+=(--build-arg "VITE_FARO_URL=$VITE_FARO_URL")
fi
BUILD_ARGS+=(--build-arg "VITE_APP_VERSION=$VERSION")

if [ -n "${GRAFANA_OBSERVABILITY_FARO_TOKEN:-}" ]; then
  BUILD_ARGS+=(--build-arg "GRAFANA_OBSERVABILITY_FARO_TOKEN=$GRAFANA_OBSERVABILITY_FARO_TOKEN")
fi

if [ -z "${GRAFANA_OBSERVABILITY_FARO_TOKEN:-}" ]; then
  echo "⚠️  GRAFANA_OBSERVABILITY_FARO_TOKEN not set — source maps will NOT be uploaded to Grafana."
fi

echo "🚀 Building and pushing $SERVICE_NAME (version: $VERSION)..."
docker buildx build --platform linux/arm64 \
  "${BUILD_ARGS[@]}" \
  -f "$REPO_ROOT/Dockerfile.prod" \
  -t "$DOCKERHUB_USERNAME/$SERVICE_NAME:$VERSION" \
  -t "$DOCKERHUB_USERNAME/$SERVICE_NAME:latest" \
  "$REPO_ROOT" --push

echo "✅ $SERVICE_NAME image built and pushed successfully!"
