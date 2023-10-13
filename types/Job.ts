import { StaticImageData } from 'next/image';

export type Job = {
  headline?: string
  image?: StaticImageData
  translation: string
  time: string
  alt: string
};
