"use client";

import cn from "classnames";
import Image from "next/image";
import { useState } from "react";
import useFetchApiData from "../../hooks/useFetchApiData";
import styles from "./Details.module.css";
import type { IDetailsProps, PerfumeImage } from "./Details.types";

const Details = (props: IDetailsProps) => {
  const { perfumeCode } = props;
  const [imageLoaded, setImageLoaded] = useState(false);

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
              [styles.loaded]: imageLoaded,
            })}
          >
            <Image
              className={styles.img}
              src={imageUrl}
              alt={`image-code-${perfumeCode}`}
              width={550}
              height={350}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      )}
      {!imageType && !imageUrl && null}
    </>
  );
};

export default Details;
