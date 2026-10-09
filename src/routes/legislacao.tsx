import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ambitos, laws, type Ambito } from "@/content/laws";

export const Route = createFileRoute("/legislacao")({
  head: () => ({
    meta: [
      { title: "Legislação brasileira · HUMUS" },
      {
        name: "description",
        content:
          "Mapa educativo das leis brasileiras de inclusão, trabalho, escola e cuidado da neurodiversidade.",
      },
    ],
  }),
  component: LawsPage,
});

function LawsPage() {
  const [ambito, setAmbito] = useState<(typeof ambitos)[number]>("Tudo");
  const visible = useMemo(
    () => (ambito === "Tudo" ? laws : laws.filter((law) => law.ambito === (ambito as Ambito))),
    [ambito],
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <p className="text-xs font-semibold tracking-widest text-clay uppercase">Direito</p>
      <h1 className="font-serif mt-3 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
        O que o Brasil já escreveu em defesa de quem a norma trata como problema.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Mapa educativo, não petição. TDAH tem lei de escola. Autismo tem equiparação plena à deficiência.
        Trabalho digno não espera o próximo estatuto — e também não se inventa benefício que a lei não dá.
      </p>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {ambitos.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setAmbito(item)}
            className={`min-h-11 shrink-0 rounded-full px-4 text-sm ${
              ambito === item ? "bg-pine text-on-pine" : "border border-line bg-card text-ink"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        {visible.map((law) => (
          <article key={law.id} id={law.id} className="scroll-mt-24 rounded-3xl border border-line bg-card p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-moss px-3 py-1 text-xs font-semibold tracking-wide text-pine uppercase">
                {law.ambito}
              </span>
              <h2 className="font-serif text-2xl text-ink">{law.nome}</h2>
            </div>
            <p className="mt-1 text-sm text-brass">{law.diploma}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs tracking-widest text-pine uppercase">Garante</p>
                <p className="mt-2 leading-relaxed text-ink">{law.garante}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-clay uppercase">Limite honesto</p>
                <p className="mt-2 leading-relaxed text-ink">{law.limite}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <aside className="mt-8 rounded-3xl border border-clay bg-card p-5">
        <h2 className="font-serif text-2xl text-ink">O que ainda não é lei</h2>
        <p className="mt-3 leading-relaxed text-ink">
          Não há, em 2026, um estatuto do TDAH que o declare deficiência para todos os efeitos, como a Lei
          Berenice Piana fez com o autismo. Projetos circulam. Enquanto não viram lei, prometer cota, BPC ou
          isenção pelo nome TDAH é desinformação — e atrasa quem realmente precisa de avaliação biopsicossocial.
        </p>
      </aside>
    </main>
  );
}
