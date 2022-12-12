import Image from "next/image";
import { ImageProps } from "../../types";
import styles from "./ImageContainer.module.scss";

export function ImageContainer(props: ImageProps) {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={props.src}
        objectFit="cover"
        layout="fill"
        title="Product"
        alt={props.alt}
        style={{
          borderRadius: "20px",
        }}
      />
    </div>
  );
}
