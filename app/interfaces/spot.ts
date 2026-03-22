export interface Spot {
  link: string;
  position: number;
  type: string;
  image: SpotImage;
}

export interface SpotImage {
  aspectRatio: string;
  imageUrl: string;
  focalPoint: {
    x: number;
    y: number;
  };
  maxWidth: string;
  alt: string;
}