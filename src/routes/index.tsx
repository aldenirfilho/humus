import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { articles, layerLabel } from "@/content/articles";
import { laws } from "@/content/laws";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((article) =>
      `${article.title} ${article.dek} ${article.kicker}`.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <main>
      <section className="bg-pine text-on-pine">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:py-20 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold tracking-widest text-brass uppercase">Revista brasileira</p>
            <h1 className="font-serif mt-4 max-w-3xl text-4xl leading-[1.08] sm:text-6xl">
              A terra de onde a humildade tira o nome. Não a terra onde se pisa.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-pine/85">
              HUMUS fortalece vínculo e inclusão, e enfrenta o preconceito religioso contra pessoas
              neurodivergentes. Direito brasileiro na mesa. Ciência no que ela aguenta. Leitura pastoral
              onde a fé foi usada como acusação.
            </p>
          </div>
          <aside className="rounded-3xl bg-pine-2/15 p-5 text-on-pine ring-1 ring-on-pine/20">
            <p className="text-xs tracking-widest text-brass uppercase">Método da casa</p>
            <ol className="mt-4 space-y-4">
              <li>
                <strong className="block">Direito</strong>
                <span className="text-sm leading-relaxed text-on-pine/80">
                  O que a lei já escreveu — e o que o post de rede inventa.
                </span>
              </li>
              <li>
                <strong className="block">Ciência</strong>
                <span className="text-sm leading-relaxed text-on-pine/80">
                  Herdabilidade, cronotipo, hipótese evolutiva. Sem gene sagrado.
                </span>
              </li>
              <li>
                <strong className="block">Leitura</strong>
                <span className="text-sm leading-relaxed text-on-pine/80">
                  O silêncio da Escritura e o prejuízo de dois mil anos de norma única.
                </span>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-10 sm:grid-cols-3">
        {[
          ["Não é defeito moral", "Inquietação, tique, atraso e hiperfoco não são demônio nem preguiça."],
          ["Não é casta", "Ninguém é primeiro filho biológico de Deus nem nasceu para servir de graça."],
          ["Não é automático", "TDAH não é deficiência por lei só pelo nome. TEA é. A diferença importa."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-3xl border border-line bg-card p-5">
            <h2 className="font-serif text-2xl text-ink">{title}</h2>
            <p className="mt-2 text-base leading-relaxed text-muted">{text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8" aria-labelledby="foco-claro-title">
        <div className="rounded-3xl border border-line bg-card p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-widest text-brass uppercase">Selo TDAH Friendly · FOCO CLARO</p>
          <h2 id="foco-claro-title" className="font-serif mt-3 text-3xl text-ink">Escolhas com menos ruído, mais clareza e controle.</h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">Avalie jogos, filmes, séries, sites, apps, livros e PDFs com critérios documentados. Bronze acima de 70, prata acima de 80 e ouro acima de 90 pontos. Evidência insuficiente mantém a avaliação pendente.</p>
          <div className="mt-5 flex flex-wrap gap-4">
            <a href="/neurovinculos/foco-claro/PAINEL.html" className="inline-flex min-h-11 items-center rounded-full bg-pine px-5 py-3 font-semibold text-on-pine">Abrir o avaliador →</a>
            <a href="/neurovinculos/index.html" className="inline-flex min-h-11 items-center px-2 py-3 text-pine underline">Conhecer NeuroVínculos Brasil</a>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">Método editorial experimental; não é certificação clínica nem medida de dopamina. O painel calcula avaliações fornecidas; o agente pesquisa no assistente. Cursos têm índice preenchível de compatibilidade, sem previsão de sucesso profissional.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl text-ink">Caderno</h2>
            <p className="mt-1 text-muted">Oito leituras. Busca pelo título.</p>
          </div>
          <label className="block w-full sm:max-w-xs">
            <span className="sr-only">Buscar leitura</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar no caderno"
              className="min-h-11 w-full rounded-full border border-line bg-card px-4 text-ink outline-none focus:border-pine"
            />
          </label>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              to="/p/$slug"
              params={{ slug: article.slug }}
              className="group rounded-3xl border border-line bg-card p-5 hover:border-pine"
            >
              <div className="flex items-center justify-between gap-3 text-xs tracking-widest text-brass uppercase">
                <span>{article.kicker}</span>
                <span>
                  {layerLabel[article.layer]} · {article.minutes} min
                </span>
              </div>
              <h3 className="font-serif mt-3 text-2xl leading-snug text-ink group-hover:text-clay">
                {article.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{article.dek}</p>
            </Link>
          ))}
          {filtered.length === 0 ? (
            <p className="text-muted">Nada com esse termo. Tente noite, lei ou igreja.</p>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-3xl bg-moss px-5 py-8 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-ink">Lei que já existe</h2>
              <p className="mt-2 max-w-xl text-muted">
                {laws.length} diplomas no mapa. Do constitucional ao que a CLT não escreveu.
              </p>
            </div>
            <Link
              to="/legislacao"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-pine px-5 text-on-pine"
            >
              Abrir o mapa
            </Link>
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {laws.slice(0, 6).map((law) => (
              <li key={law.id} className="rounded-2xl bg-card px-4 py-3">
                <p className="text-xs tracking-wide text-clay uppercase">{law.diploma}</p>
                <p className="font-serif text-lg text-ink">{law.nome}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
