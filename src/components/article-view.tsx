import { Link } from "@tanstack/react-router";
import { articles, layerLabel, type Article, type Block } from "@/content/articles";
import { Rich } from "@/components/rich-text";

const toneClass = {
  limite: "border-clay bg-card",
  ciencia: "border-pine bg-moss",
  leitura: "border-brass bg-card",
  cuidado: "border-pine bg-card",
} as const;

function BlockView({ block }: { block: Block }) {
  if (block.kind === "h2") {
    return (
      <h2 className="font-serif mt-10 text-3xl leading-tight text-ink">{block.text}</h2>
    );
  }
  if (block.kind === "p") {
    return (
      <p className="mt-4 text-lg leading-relaxed text-ink">
        <Rich text={block.text} />
      </p>
    );
  }
  if (block.kind === "ul") {
    return (
      <ul className="mt-4 space-y-3 border-l border-line pl-5">
        {block.items.map((item) => (
          <li key={item} className="text-lg leading-relaxed text-ink">
            <Rich text={item} />
          </li>
        ))}
      </ul>
    );
  }
  if (block.kind === "quote") {
    return (
      <figure className="mt-8 border-l-2 border-clay pl-5">
        <blockquote className="font-serif text-2xl leading-snug text-ink">{block.text}</blockquote>
        <figcaption className="mt-2 text-sm tracking-wide text-brass uppercase">{block.cite}</figcaption>
      </figure>
    );
  }
  return (
    <aside className={`mt-6 rounded-2xl border px-5 py-4 ${toneClass[block.tone]}`}>
      <p className="text-xs font-semibold tracking-widest text-clay uppercase">{block.title}</p>
      <p className="mt-2 text-base leading-relaxed text-ink">{block.text}</p>
    </aside>
  );
}

export function ArticleView({ article }: { article: Article }) {
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-10">
      <p className="text-xs font-semibold tracking-widest text-clay uppercase">{article.kicker}</p>
      <h1 className="font-serif mt-3 text-4xl leading-[1.12] text-ink sm:text-5xl">{article.title}</h1>
      <p className="mt-4 text-xl leading-relaxed text-muted">{article.dek}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-sm text-pine">
        <span className="rounded-full bg-moss px-3 py-1">{layerLabel[article.layer]}</span>
        <span className="rounded-full border border-line px-3 py-1">{article.minutes} min</span>
      </div>
      <div className="mt-8">
        {article.blocks.map((block, index) => (
          <BlockView key={index} block={block} />
        ))}
      </div>
      <section className="mt-14 border-t border-line pt-8">
        <h2 className="font-serif text-2xl text-ink">Continuar lendo</h2>
        <ul className="mt-4 space-y-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                to="/p/$slug"
                params={{ slug: item.slug }}
                className="group block rounded-2xl border border-line bg-card px-4 py-3"
              >
                <span className="text-xs tracking-widest text-brass uppercase">{item.kicker}</span>
                <span className="mt-1 block font-serif text-xl leading-snug text-ink group-hover:text-clay">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
