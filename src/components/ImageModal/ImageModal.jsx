import css from "./ImageModal.module.css";
export default function ImageModal({ image }) {
  return (
    <div className={css.modal_conatiner}>
      <img
        className={css.modal_img}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <ul className={css.modal_list}>
        <li className={css.modal_item}>{image.description}</li>
        <li className={css.modal_item}>Creator: {image.user.name}</li>
        <li className={css.modal_item}>Created at: {image.created_at}</li>
        <li className={css.modal_item}>Like`s: {image.likes}</li>
      </ul>
    </div>
  );
}
