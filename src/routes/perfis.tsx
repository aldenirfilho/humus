import { createFileRoute, Link } from "@tanstack/react-router";
import { profiles } from "@/content/profiles";

export const Route = createFileRoute("/perfis")({
  head: () => ({
    meta: [
      { title: "Perfis da neurodiversidade · HUMUS" },
      {
        name: "description",
        content: "TDAH, autismo, dislexia, Tourette, dupla excepcionalidade e dispraxia — sem caricatura.",
      },
    ],
  }),
  component: ProfilesPage,
});

function ProfilesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <p className="text-xs font-semibold tracking-widest text-clay uppercase">Perfis</p>
      <h1 className="font-serif mt-3 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
        Gente inteira. Não mascote, não ameaça, não anjo sem vontade.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Neurodiversidade aqui é variação do sistema nervoso com história de exclusão — não um único caráter
        humilde obrigatório. Potência existe. Custo também. Os dois cabem na mesma pessoa.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {profiles.map((profile) => (
          <article key={profile.id} id={profile.id} className="rounded-3xl border border-line bg-card p-5">
            <h2 className="font-serif text-3xl text-ink">{profile.nome}</h2>
            <p className="mt-2 text-lg leading-relaxed text-muted">{profile.linha}</p>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-xs tracking-widest text-clay uppercase">Como a norma lê errado</dt>
                <dd className="mt-1 leading-relaxed text-ink">{profile.leituraErrada}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-pine uppercase">O que é</dt>
                <dd className="mt-1 leading-relaxed text-ink">{profile.oQueE}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-brass uppercase">Lei</dt>
                <dd className="mt-1 leading-relaxed text-ink">{profile.lei}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-pine uppercase">O que ajuda o vínculo</dt>
                <dd className="mt-1 leading-relaxed text-ink">{profile.cuidado}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-8 text-muted">
        A leitura sobre silêncio religioso está em{" "}
        <Link to="/p/$slug" params={{ slug: "o-que-nao-foi-escrito" }} className="text-pine underline">
          O que a Bíblia não nomeou
        </Link>
        .
      </p>
    </main>
  );
}
