interface PhotoProps {
  src: string;
  alt: string;
  caption: string;
}

export default function Photo(props: PhotoProps) {
  return (
    <div class="article-photo">
      <img src={props.src} alt={props.alt} loading="lazy" />
      <em class="photo-caption">{props.caption}</em>
    </div>
  );
}