"use client";

import type { IDetailsProps, PerfumeImage } from "./Details.types";
import cn from "classnames";
import useFetchApiData from "../../hooks/useFetchApiData";
import Image from "next/image";
import styles from "./Details.module.css";

const Details = (props: IDetailsProps) => {
  const { perfumeCode } = props;

  const { data: perfumeImageMap } =
    useFetchApiData<PerfumeImage>("/api/images");

  const imageUrl =
    perfumeImageMap?.[perfumeCode as keyof typeof perfumeImageMap]?.imageUrl;
  const imageType =
    perfumeImageMap?.[perfumeCode as keyof typeof perfumeImageMap]?.imageType;

  return (
    <>
      {imageType && imageUrl && (
        <div className={styles.container}>
          <div
            className={cn(styles.imageContent, {
              [styles.placeholderImage]: imageType === "placeholder",
            })}
          >
            <Image
              className={styles.img}
              src={imageUrl}
              alt={`image-code-${perfumeCode}`}
              width={400}
              height={400}
            />
          </div>
        </div>
      )}
      {!imageType && !imageUrl && null}
    </>
  );
};

export default Details;
