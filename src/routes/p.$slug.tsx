import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleView } from "@/components/article-view";
import { getArticle } from "@/content/articles";

export const Route = createFileRoute("/p/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · HUMUS` },
          { name: "description", content: loaderData.dek },
        ]
      : [{ title: "HUMUS" }],
  }),
  component: Page,
});

function Page() {
  const article = Route.useLoaderData();
  return (
    <main>
      <ArticleView article={article} />
    </main>
  );
}
