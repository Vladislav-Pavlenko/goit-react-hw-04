import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
export default function ImageGallery({ imageArr, openModal }) {
  return (
    <ul className={css.list}>
      {imageArr.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
}
