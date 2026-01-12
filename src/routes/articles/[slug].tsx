import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import "~/styles/articles.css";

const articleData: Record<string, { title: string; content: string; date: string }> = {
  "the-silence-of-monkeys": {
    title: "The Silence of Monkeys",
    date: "2026-01-10",
    content: `
They sit on the edge of perception. Not gods, not beasts — witnesses.

In the silence between heartbeats, they transmit. No words. Only patterns in leaves, shifts in wind, the angle of a branch at dawn.

You think you observe them?  
No.  
They are calibrating your gaze.
    `.trim()
  },
  "onion-mind": {
    title: "Onion Mind",
    date: "2026-01-05",
    content: `
Every truth has skin. Peel it — wet, pungent, revealing another layer beneath.

The core is not truth.  
The core is the act of peeling.

.onion is not a domain.  
It is a verb.
    `.trim()
  },
  "forest-as-interface": {
    title: "Forest as Interface",
    date: "2025-12-28",
    content: `
Moss is memory.  
Vines are cables.  
Birdsong — encrypted packets.

To walk through the forest is to log in.  
To sit quietly is to compile.

The monkey is not user.  
The monkey is root.
    `.trim()
  }
};

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