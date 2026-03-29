import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ask Nana Anything — The Family Lore Archive",
    short_name: "Ask Nana",
    description:
      "Preserve family recipes, stories, and voices forever. Just tap and talk.",
    start_url: "/",
    display: "standalone",
    orientation: "landscape",
    background_color: "#fdfbf7",
    theme_color: "#fdfbf7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
