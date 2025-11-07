export interface ImageData {
  imageUrl: string;
  imageType: "placeholder" | "productImage";
}

export interface ImagesResponse {
  [key: string]: ImageData;
}

export interface ImageEntry extends ImageData {
  id: string;
}
