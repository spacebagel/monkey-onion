import { Title } from "@solidjs/meta";
import "~/styles/article-page.css";
import Photo from "~/components/Photo";

export default function EnvironmentalEnrichmentForPrimates() {
  return (
    <>
      <Title>Environmental Enrichment for Primates - MONKEY.onion</Title>
      <main class="article-page">
        <h1 class="article-title">ENVIRONMENTAL ENRICHMENT FOR PRIMATES</h1>

        <Photo src="/gallery/gibbon-brahiation.jpg" alt="Gibbon brachiating" caption="Gibbon in flight" />

        <p>
          A cage is not a home. It is a stage-and the animal is forced to perform boredom.
        </p>

        <p>
          True enrichment isn’t about toys. It’s about restoring <em>agency</em>:
          the power to choose where to sit, what to touch, when to hide.
        </p>

        <h2>Three Principles</h2>
        <ol>
          <li><strong>Verticality</strong> - Lemurs climb. Gibbons swing. Gorillas need height to survey their domain.</li>
          <li><strong>Uncertainty</strong> - Fixed ropes breed habit. Swinging vines breed attention.</li>
          <li><strong>Choice</strong> - Multiple sleeping platforms. Multiple escape routes. No forced exposure.</li>
        </ol>

        <Photo src="/gallery/orangutan-tool-use.jpg" alt="Orangutan using stick to extract food" caption="Orangutan using stick to extract food" />

        <p>
          Feeding puzzles aren’t games. They are acts of resistance against the void of captivity.
        </p>

        <p>
          When an orangutan spends 20 minutes extracting seeds from a log,
          it isn’t “solving a problem”-it is reclaiming time.
        </p>

        <p class="signature">
          - Based on Meshik & Tarhanova, <em>Applied Primatology</em>, Moscow, 2004
        </p>
      </main>
    </>
  );
}