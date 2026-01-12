import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import "~/styles/articles.css";

const articleData: Record<string, { title: string; content: string; date: string }> = { };

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const article = articleData[slug];

  if (!article) {
    return (
      <>
        <Title>404 - MONKEY.onion</Title>
        <main class="article-page">
          <h1 class="page-title">NOT FOUND</h1>
          <p class="article-excerpt">The monkey has hidden this page.</p>
          <a href="/articles" class="back-link">← Back to Articles</a>
        </main>
      </>
    );
  }

  return (
    <>
      <Title>{article.title} - MONKEY.onion</Title>
      <main class="article-page">
        <h1 class="article-title">{article.title}</h1>
        <div class="article-content">
        {article.content.split("\n\n").map(para => (
          <p>{para}</p>
        ))}
        <time class="article-date">{new Date(article.date).toLocaleDateString("en-GB")}</time>
        </div>
        <a href="/articles" class="back-link">← Back to Articles</a>
      </main>
    </>
  );
}