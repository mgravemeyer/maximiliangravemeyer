import { StaticImageData } from 'next/image';

export type Job = {
  image?: StaticImageData;
  translation: string;
  alt: string;
};
