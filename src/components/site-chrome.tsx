import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { kind: "plain" as const, to: "/" as const, label: "Início" },
  { kind: "plain" as const, to: "/legislacao" as const, label: "Leis" },
  { kind: "plain" as const, to: "/perfis" as const, label: "Perfis" },
  { kind: "essay" as const, slug: "genes-e-hipoteses", label: "Ciência" },
  { kind: "essay" as const, slug: "o-que-nao-foi-escrito", label: "Leitura" },
  { kind: "essay" as const, slug: "cronotipo-noturno", label: "Noite" },
  { kind: "essay" as const, slug: "trabalho-dignidade", label: "Trabalho" },
  { kind: "essay" as const, slug: "vinculos-que-seguram", label: "Vínculos" },
];

function hrefOf(link: (typeof links)[number]) {
  return link.kind === "plain" ? link.to : `/p/${link.slug}`;
}

function applyNight(on: boolean) {
  document.documentElement.classList.toggle("night", on);
  try {
    localStorage.setItem("humus-night", on ? "1" : "0");
  } catch {
    /* ignore */
  }
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [night, setNight] = useState(false);

  useEffect(() => {
    setNight(document.documentElement.classList.contains("night"));
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link to="/" className="min-w-0 shrink-0">
          <span className="block font-serif text-2xl leading-none tracking-tight text-ink">HUMUS</span>
          <span className="mt-1 block text-xs tracking-widest text-brass uppercase">vínculo e inclusão</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const href = hrefOf(link);
            const active = href === "/" ? pathname === "/" : pathname === href;
            const className = `rounded-full px-3 py-2 text-sm ${active ? "bg-pine text-on-pine" : "text-ink hover:bg-paper-2"}`;
            return link.kind === "plain" ? (
              <Link key={href} to={link.to} className={className}>
                {link.label}
              </Link>
            ) : (
              <Link key={href} to="/p/$slug" params={{ slug: link.slug }} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          aria-pressed={night}
          onClick={() => {
            const next = !night;
            setNight(next);
            applyNight(next);
          }}
          className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-3 text-sm text-ink lg:ml-2"
        >
          {night ? <Sun className="size-4" aria-hidden /> : <Moon className="size-4" aria-hidden />}
          {night ? "Dia" : "Noite"}
        </button>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav className="grid gap-1 border-t border-line px-4 py-3 lg:hidden">
          {links.map((link) => {
            const href = hrefOf(link);
            return link.kind === "plain" ? (
              <Link key={href} to={link.to} className="rounded-xl px-3 py-3 text-base text-ink hover:bg-paper-2">
                {link.label}
              </Link>
            ) : (
              <Link
                key={href}
                to="/p/$slug"
                params={{ slug: link.slug }}
                className="rounded-xl px-3 py-3 text-base text-ink hover:bg-paper-2"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-pine-2 text-on-pine">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2">
        <div>
          <p className="font-serif text-3xl">HUMUS</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-on-pine/80">
            Revista brasileira de neurodiversidade, vínculo e dignidade. Inspirada na função pública de um
            magazine como o ADDitude — guias claros, vida real — e reescrita para o direito e as igrejas daqui.
            Não copia o site americano.
          </p>
        </div>
        <div className="text-sm leading-relaxed text-on-pine/80">
          <p>
            Três camadas em toda leitura séria: <strong className="text-on-pine">direito</strong>,{" "}
            <strong className="text-on-pine">ciência</strong> e <strong className="text-on-pine">leitura</strong>.
            O que é hipótese não vira fato. O que é denúncia pastoral não vira laudo.
          </p>
          <p className="mt-3">
            Não substitui médico, advogado ou líder religioso. Em crise: CVV 188 · SAMU 192.
          </p>
          <p className="mt-3">Educativo. Outubro de 2026. Sem dados de pacientes.</p>
          <p className="mt-3"><a href="/neurovinculos/foco-claro/PAINEL.html" className="underline">FOCO CLARO · Avaliador TDAH Friendly</a></p>
        </div>
      </div>
    </footer>
  );
}
