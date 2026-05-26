import Image from "next/image";
import styles from "./PropertyGallery.module.css";

type PropertyGalleryProps = {
  pictures: string[];
  title: string;
};

export function PropertyGallery({ pictures, title }: PropertyGalleryProps) {
  const galleryPictures = pictures.slice(0, 5);

  if (!galleryPictures.length) {
    return null;
  }

  return (
    <div className={styles.gallery}>
      {galleryPictures.map((picture, index) => (
        <div className={styles.picture} key={`${picture}-${index}`}>
          <Image
            src={picture}
            alt={index === 0 ? title : ""}
            fill
            priority={index === 0}
            sizes={
              index === 0
                ? "(max-width: 47.5rem) calc(100vw - 2rem), 27rem"
                : "(max-width: 47.5rem) 25vw, 8rem"
            }
          />
        </div>
      ))}
    </div>
  );
}
