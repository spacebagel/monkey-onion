import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <>
      <Title>404 - MONKEY.onion</Title>
      <HttpStatusCode code={404} />
      <main class="not-found-page">
        <div class="not-found-content">
          <h1 class="not-found-title">404</h1>
          <p class="not-found-text">
            The node you are looking for<br />
            does not respond.
          </p>
          <a href="/" class="not-found-link">← Return to root</a>
        </div>
      </main>
    </>
  );
}