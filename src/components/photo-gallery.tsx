"use client";

import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import { libraryPhotos } from "@/lib/data";

type Photo = { src: string; width: number; height: number };

export function PhotoGallery({ photos = libraryPhotos }: { photos?: Photo[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={350}
        onClick={({ index: i }) => setIndex(i)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}
