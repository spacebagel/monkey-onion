import { Title } from "@solidjs/meta";
import "~/styles/articles.css";

const articles = [
  {
    slug: "ape-language-research",
    title: "The Human and the Ape",
    excerpt: "On the contextualisation of early experiments in Ape Language Research.",
    date: "2026-01-12"
  },
  {
    slug: "modern-problems-of-primate-systematics",
    title: "Modern Problems of Primate Systematics",
    excerpt: "How many species of primates exist? The answer depends not on nature—but on who is counting.",
    date: "2026-01-12"
  },
  {
    slug: "environmental-enrichment-for-primates",
    title: "Environmental Enrichment for Primates",
    excerpt: "True enrichment isn’t about toys. It’s about restoring agency.",
    date: "2026-01-11"
  },
  {
    slug: "keeper-as-environmental-factor",
    title: "The Keeper as Environmental Factor",
    excerpt: "The keeper who restores even the illusion of choice becomes part of the environment—not its master.",
    date: "2026-01-10"
  }
];

export default function ArticlesPage() {
  return (
    <>
      <Title>Articles - MONKEY.onion</Title>
      <main class="articles-page">
        <h1 class="page-title">ARTICLES</h1>
        <div class="articles-grid">
          {articles.map(article => (
            <article class="articles-card">
              <a href={`/articles/${article.slug}`} class="articles-link">
                <h2 class="articles-title">{article.title}</h2>
                <p class="articles-excerpt">{article.excerpt}</p>
                <time class="articles-date">{new Date(article.date).toLocaleDateString("en-GB")}</time>
              </a>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}