import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import css from "./SearcbBar.module.css";

export default function SearchBar({ onSubmit }) {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formInput = inputRef.current.value;
    if (formInput.trim() === "") {
      toast("Pls enter search query", { position: "top-right" });
      return;
    }
    onSubmit(formInput);
    event.target.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.form_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={inputRef}
        />
        <button className={css.form_btn} type="submit">
          <IoSearchSharp />
        </button>
        <Toaster />
      </form>
    </header>
  );
}
