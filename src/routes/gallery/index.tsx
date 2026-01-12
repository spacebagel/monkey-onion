import { Title } from "@solidjs/meta";
import "~/styles/gallery.css";

const photos = [
  { id: 1, src: "/gallery/monkey1.jpg", alt: "Monkey" },
  { id: 2, src: "/gallery/monkey2.jpg", alt: "Monkey" },
  { id: 3, src: "/gallery/monkey3.jpg", alt: "Monkey" },
  { id: 4, src: "/gallery/monkey4.jpg", alt: "Monkey" },
  { id: 5, src: "/gallery/monkey5.jpg", alt: "Monkey" },
  { id: 6, src: "/gallery/monkey6.jpg", alt: "Monkey" },
  { id: 7, src: "/gallery/monkey7.jpg", alt: "Monkey" },
  { id: 8, src: "/gallery/monkey8.jpg", alt: "Monkey" },
  { id: 9, src: "/gallery/monkey9.jpg", alt: "Monkey" },
  { id: 10, src: "/gallery/monkey10.jpg", alt: "Monkey" },
  { id: 11, src: "/gallery/monkey11.jpg", alt: "Monkey" },
  { id: 12, src: "/gallery/monkey12.jpg", alt: "Monkey" },
  { id: 13, src: "/gallery/monkey13.jpg", alt: "Monkey" },
  { id: 14, src: "/gallery/monkey14.jpg", alt: "Monkey" },
  { id: 15, src: "/gallery/monkey15.jpg", alt: "Monkey" },
  { id: 16, src: "/gallery/monkey16.jpg", alt: "Monkey" },
  { id: 17, src: "/gallery/monkey17.jpg", alt: "Monkey" },
  { id: 18, src: "/gallery/monkey18.jpg", alt: "Monkey" },
  { id: 19, src: "/gallery/monkey19.jpg", alt: "Monkey" },
  { id: 20, src: "/gallery/monkey20.jpg", alt: "Monkey" },
  { id: 21, src: "/gallery/monkey21.jpg", alt: "Monkey" },
  { id: 22, src: "/gallery/monkey22.jpg", alt: "Monkey" },
  { id: 23, src: "/gallery/monkey23.jpg", alt: "Monkey" },
  { id: 24, src: "/gallery/monkey24.jpg", alt: "Monkey" },
  { id: 25, src: "/gallery/monkey25.jpg", alt: "Monkey" },
  { id: 26, src: "/gallery/monkey26.jpg", alt: "Monkey" },
  { id: 27, src: "/gallery/monkey27.jpg", alt: "Monkey" },
  
];

export default function GalleryPage() {
  return (
    <>
      <Title>Gallery - MONKEY.onion</Title>
      <main class="gallery-page">
        <h1 class="page-title">GALLERY</h1>
        <div class="gallery-grid">
          {photos.map(photo => (
            <div class="gallery-item">
              <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={photo.alt}>
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}