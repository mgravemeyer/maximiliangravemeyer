import { StaticImageData } from 'next/image';

export type Job = {
  headline?: string;
  image?: StaticImageData;
  translation: string;
  alt: string;
};
