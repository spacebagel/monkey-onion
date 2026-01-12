import { Title } from "@solidjs/meta";
import "~/styles/article-page.css";
import Photo from "~/components/Photo";

export default function ApeLanguageResearch() {
    return (
        <>
            <Title>Ape Language Research - MONKEY.onion</Title>
            <main class="article-page">
                <h1 class="article-title">THE HUMAN AND THE APE</h1>
                <p class="article-subtitle">On the contextualisation of early experiments in Ape Language Research</p>

                <Photo src="/gallery/washoe-chimpanzee.jpg" alt="Washoe chimpanzee" caption="Washoe chimpanzee"/>

                <p>
                    In the 1960s–70s, scientists raised chimpanzees and gorillas as children.
                    They taught them sign language, plastic tokens, lexigrams - anything but speech.
                    The goal was not to make pets talk. It was to ask: <em>What separates us?</em>
                </p>

                <p>
                    Washoe, Sarah, Koko, Lana - their names entered scientific legend.
                    They combined symbols creatively, joked, lied, mourned.
                    To their keepers, they were minds, not mechanisms.
                </p>

                <Photo src="/gallery/koko-the-gorilla-penny-patterson-kitten.webp" alt="Koko with kitten" caption="Koko with kitten"/>

                <h2>The Clever Hans Effect</h2>
                <p>
                    Critics warned: this is not language. This is performance.
                    Like Clever Hans - the horse who “solved math” by reading unconscious cues from his owner - apes may respond not to meaning, but to micro-gestures, breath, expectation.
                </p>

                <p>
                    When Herbert Terrace analyzed footage of Nim Chimpsky, he found:
                    most “sentences” were imitations, not inventions.
                    The ape was not speaking - he was echoing.
                </p>

                <Photo src="/gallery/projectnim.jpg" alt="Nim and researchers" caption="Nim and researchers"/>

                <h2>Between Science and Myth</h2>
                <p>
                    Yet the ambiguity remains fertile.
                    Even if apes don’t “have language,” they enter a shared semiotic space - a fragile bridge built of gestures, rewards, and mutual attention.
                </p>

                <p>
                    As Donna Haraway noted: these experiments were never neutral.
                    They were acts of kinship, ideology, and longing.
                    To teach an ape language is to ask it to become human - and to redefine what “human” means.
                </p>

                <h2>The Node Remains Open</h2>
                <p>
                    Today, Ape Language Research is marginalised.
                    But its questions echo in AI, in disability communication, in our relationship with all non-human minds.
                </p>

                <p class="signature">
                    - Adapted from Ilya Utekhin, <em>Sociology of Power</em>, 2019
                </p>
            </main>
        </>
    );
}