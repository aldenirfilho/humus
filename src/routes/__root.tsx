import type { ReactNode } from "react";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import appCss from "../styles.css?url";

const nightBoot = `try{if(localStorage.getItem("humus-night")==="1")document.documentElement.classList.add("night")}catch(e){}`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HUMUS — vínculo, inclusão e neurodiversidade" },
      {
        name: "description",
        content:
          "Revista brasileira contra o preconceito religioso e a favor dos direitos da neurodiversidade. Legislação, ciência e leitura pastoral.",
      },
      { name: "theme-color", content: "#2f4a3c" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,650;1,6..72,500&family=Outfit:wght@400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  shellComponent: RootShell,
  component: () => (
    <>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  ),
  notFoundComponent: () => (
    <main className="mx-auto max-w-xl px-5 py-20">
      <p className="text-xs tracking-widest text-clay uppercase">Não achou</p>
      <h1 className="font-serif mt-3 text-4xl text-ink">Essa página não está no chão da casa.</h1>
      <a href="/" className="mt-6 inline-flex min-h-11 items-center text-pine underline">
        Voltar ao início
      </a>
    </main>
  ),
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: nightBoot }} />
        <PreviewHostBridge />
        <AuthProvider>{children}</AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
