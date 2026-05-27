"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/shared";
import styles from "./PropertyGallery.module.css";

type PropertyGalleryProps = {
  pictures: string[];
  title: string;
};

export function PropertyGallery({ pictures, title }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePicture = pictures[activeIndex];
  const hasMultiplePictures = pictures.length > 1;

  if (!activePicture) {
    return null;
  }

  function showPreviousPicture() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    );
  }

  function showNextPicture() {
    setActiveIndex((currentIndex) =>
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.stage}>
        <Image
          src={activePicture}
          alt={title}
          fill
          priority
          sizes="(max-width: 47.5rem) calc(100vw - 2rem), 40rem"
        />

        {hasMultiplePictures ? (
          <>
            <button
              className={`${styles.control} ${styles.previous}`}
              onClick={showPreviousPicture}
              type="button"
              aria-label="Afficher la photo précédente"
            >
              <Icon name="back" color="black" size="1.25rem" />
            </button>
            <button
              className={`${styles.control} ${styles.next}`}
              onClick={showNextPicture}
              type="button"
              aria-label="Afficher la photo suivante"
            >
              <Icon name="back" color="black" size="1.25rem" />
            </button>
            <span className={styles.counter}>
              {activeIndex + 1} / {pictures.length}
            </span>
          </>
        ) : null}
      </div>

      {hasMultiplePictures ? (
        <div className={styles.thumbnails} aria-label="Photos du logement">
          {pictures.map((picture, index) => (
            <button
              className={styles.thumbnail}
              data-active={index === activeIndex}
              key={`${picture}-${index}`}
              onClick={() => setActiveIndex(index)}
              type="button"
              aria-label={`Afficher la photo ${index + 1}`}
            >
              <Image
                src={picture}
                alt=""
                fill
                sizes="(max-width: 47.5rem) 4.5rem, 6rem"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
