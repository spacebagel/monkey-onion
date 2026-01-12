import { Title } from "@solidjs/meta";
import "~/styles/about.css";

export default function AboutPage() {
  return (
    <>
      <Title>About - MONKEY.onion</Title>
      <main class="about-page">
        <div class="about-content">
          <h1 class="about-title">ABOUT</h1>
          <div class="about-text">
            <p>
              Just a site about monkeys. Nothing else...
            </p>
            <p>
              My Telegram channel: 
              <a class="about-text" target="_blank" href="https://t.me/pulpvr">https://t.me/pulpvr</a><br/>
            </p>
            <p>
              Toncoin: <strong>UQCWEpUjLddZ2qhGKQLpzhJlYO3uskzHTqNqnRhA8iVYkv_B</strong><br/>
              Ethereum: <strong>0x8C7b732fc28429152957ab75839581aBa9B72E34</strong>
            </p>
            <p class="signature">- V. Vegan</p>
          </div>
        </div>
      </main>
    </>
  );
}