
export type ImageUrl = { imageUrl: string; imageType: "placeholder" | "productImage" };
export type PerfumeImage = Record<string, ImageUrl>;

export type IDetailsProps = {
  perfumeCode: string;
};


