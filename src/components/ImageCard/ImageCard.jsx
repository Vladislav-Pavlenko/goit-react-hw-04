import css from "./ImageCard.module.css";
export default function ImageCard({ image, openModal }) {
  return (
    <div
      onClick={() => {
        openModal(image);
      }}
    >
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
