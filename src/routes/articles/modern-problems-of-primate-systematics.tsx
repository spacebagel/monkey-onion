import { Title } from "@solidjs/meta";
import "~/styles/article-page.css";
import Photo from "~/components/Photo";

export default function ModernProblemsOfPrimateSystematics() {
  return (
    <>
      <Title>Modern Problems of Primate Systematics - MONKEY.onion</Title>
      <main class="article-page">
        <h1 class="article-title">MODERN PROBLEMS OF PRIMATE SYSTEMATICS</h1>

        <Photo src="/gallery/lemur-taxonomy.png" alt="Lemur classification chart" caption="Lemur classification" />

        <p>
          How many species of primates exist? 250? 356? Over 600?
          The answer depends not on nature-but on who is counting.
        </p>

        <p>
          In the 1960s, a biological species was defined by its ability to interbreed.
          Today, geneticists split lineages at the slightest divergence-while field primatologists see fluid boundaries in the wild.
        </p>

        <h2>The Great Split: Strepsirrhini vs. Haplorhini</h2>
        <p>
          Gone is the old division into “prosimians” and “anthropoids.”
          Modern taxonomy separates primates into:
        </p>
        <ul>
          <li><strong>Strepsirrhines</strong>: lemurs, lorises, galagos - wet-nosed, nocturnal, scent-driven.</li>
          <li><strong>Haplorhines</strong>: tarsiers, monkeys, apes - dry-nosed, visual, socially complex.</li>
        </ul>

        <Photo src="/gallery/tarsier-eyes.webp" alt="Tarsier with enormous eyes" caption="Tarsius spectrum - the “living fossil” that bridges both worlds" />

        <p>
          The tarsier-a creature with the brain of an ape and the habits of a lemur-defies easy categorization.
          It is the ghost in the machine of primate phylogeny.
        </p>

        <h2>When Is a Subspecies a Species?</h2>
        <p>
          In 2000, genetic evidence elevated Bornean and Sumatran orangutans to full species status.
          Keepers who had bred them together for decades were stunned: “They’re just two kinds of the same animal.”
        </p>

        <p>
          Science redraws the map. But in zoos, animals still mate across lines we’ve invented.
        </p>

        <p class="signature">
          - Adapted from M.L. Butovskaya, <em>Sociology of Power</em>, 2019
        </p>
      </main>
    </>
  );
}