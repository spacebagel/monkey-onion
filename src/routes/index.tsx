import { Title } from "@solidjs/meta";
import "~/styles/hero.css";

export default function Home() {
  return (
    <>
      <Title>MONKEY.onion</Title>
      <div class="hero">
        <img src="/monkey-hero.jpg" alt="Monkey overlooking the sea" />
        <div class="text-overlay">
          <div class="text-block">
            <div class="mon-key">MONKEY</div>
            <div class="onion">.onion</div>
          </div>
        </div>
      </div>
    </>
  );
}