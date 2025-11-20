import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} · ${siteConfig.role}`,
    short_name: "Dimitri",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/black-circle/logo-black-circle-96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/black-circle/logo-black-circle-256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/black-circle/logo-black-circle-500.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}

