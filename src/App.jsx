import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import fetchImages from "./unsplash-api.js";
import Loader from "./components/Loader/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";

export default function App() {
  const [image, setImage] = useState([]);
  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function onSubmit(newImage) {
    setImage([]);
    setQuery(newImage);
    setPage(1);
  }
  function handleClick() {
    setPage(page + 1);
  }

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function getImages() {
      try {
        setLoader(true);
        setError(false);
        const promise = await fetchImages(query, page);
        setTotalPages(3);
        setImage((prevArray) => {
          return [...prevArray, ...promise.results];
        });
        setTotalPages(promise.total_pages);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [query, page]);
  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      {image.length !== 0 && (
        <ImageGallery imageArr={image} openModal={openModal} />
      )}
      {modalIsOpen && (
        <ImageModal
          image={selectedImage}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}
      {loader && <Loader />}
      {image.length !== 0 && page < totalPages && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      {page >= totalPages && <p>THIS IS THE END! RUN FOOLS!</p>}
    </>
  );
}
