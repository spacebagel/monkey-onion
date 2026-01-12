import { Title } from "@solidjs/meta";
import "~/styles/article-page.css";
import Photo from "~/components/Photo";

export default function KeeperAsEnvironmentalFactor() {
  return (
    <>
      <Title>The Keeper as Environmental Factor - MONKEY.onion</Title>
      <main class="article-page">
        <h1 class="article-title">THE KEEPER AS ENVIRONMENTAL FACTOR</h1>

        <Photo src="/gallery/keeper-lemur-eye-contact.jpg" alt="Keeper and lemur" caption="Keeper and lemur" />

        <p>
          Two keepers approach a group of ring-tailed lemurs at feeding time.
        </p>

        <p>
          <strong>Keeper A</strong> shouts, waves arms, demands compliance.
          The lemurs scatter-then freeze in panic. Feeding takes 40 minutes.
        </p>

        <p>
          <strong>Keeper B</strong> sits quietly, places food, waits.
          The dominant female approaches first. Others follow. Feeding takes 15 minutes.
        </p>

        <p>
          The difference isn’t technique. It’s philosophy.
        </p>

        <h2>The Illusion of Control</h2>
        <p>
          Animals in captivity have lost control over space, time, and social bonds.
          The keeper who restores even the illusion of choice becomes part of the environment-not its master.
        </p>

        <Photo src="/gallery/orangutan-gaze.jpg" alt="Orangutan looking through bars" caption="You are not my jailer. You are my weather." />

        <p>
          In one case, a young female orangutan avoided mating attempts by hiding in high branches.
          A skilled keeper began opening a second transfer door-giving her an escape route.
          Within days, she initiated contact with the male on her own terms.
        </p>

        <p>
          The keeper didn’t manage behavior.
          He managed possibility.
        </p>

        <p class="signature">
          - Inspired by E.S. Neprintseva, <em>Applied Primatology</em>, Moscow, 2004
        </p>
      </main>
    </>
  );
}