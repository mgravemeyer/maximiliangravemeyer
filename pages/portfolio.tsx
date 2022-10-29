import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  EMAIL,
  PHONE,
  LINKEDIN,
  GITHUB,
  IMPRESSUM,
  DATENSCHUTZ,
} from '../const';

import useTranslation from 'next-translate/useTranslation';

import logo from '../public/media/logo.jpg';
import profilePic from '../public/media/profile.jpg';

const Portfolio: React.FC = () => {
  const { t, lang } = useTranslation('portfolio');

  return (
    <>
      <Head>
        <title>Maximilian Gravemeyer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Freelance Developer | Maximilian Gravemeyer"
        />
        <meta
          name="keywords"
          content="Gravemeyer, Freelancer, React, Next, Developer"
        />
        <meta name="author" content="Maximilian Gravemeyer" />
      </Head>
      <div className="flex flex-col w-full justify-center items-center mt-4 sm:mt-8 lg:mt-16 xl:mx-0">
        <div className="w-full px-4 sm:px-32 lg:w-[900px] lg:px-0">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-[26rem] lg:mt-12">
              <Image className="w-16 h-16" src={logo} alt="logo" />
              <h1 className=" font-quickLight mt-4 text-3xl mr-8 leading-normal">
                {t('title')}
              </h1>
              <DesktopContactButtons />
            </div>
            <div className=" w-full">
              <Image
                className="mt-4 lg:mt-0"
                src={profilePic}
                alt="profile picture"
              />
            </div>
          </div>
          <MobileContactButtons />
          <div className=" lg:ml-[285px] lg:w-[400px]">
            {/* //todo need to move this block under the profile picture */}
            <div className="mt-12">
              <p className="font-quickMedium">About Me</p>
              <p className="font-quickLight">{t('description')}</p>
            </div>
            <div className="mt-8">
              <p className="font-quickMedium">Skills & Focus</p>
              <p className="font-quickLight">{t('firstSkill')}</p>
              <p className="font-quickLight">{t('secondSkill')}</p>
              <p className="font-quickLight">{t('thirdSkill')}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const DesktopContactButtons = () => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:visible">
      <a
        className=" w-fit font-quickLight mt-4 text-stone-900 hover:text-stone-400"
        href={`mailto:${EMAIL}`}
      >
        {EMAIL}
      </a>
      <a
        className=" w-fit font-quickLight mt-[2px] text-stone-900 hover:text-stone-400"
        href={`tel:${PHONE}`}
      >
        +49 162 4375779
      </a>
      <a
        className=" w-fit font-quickLight mt-4 text-stone-900 hover:text-stone-400"
        href={LINKEDIN}
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        className=" w-fit font-quickLight mt-[2px] text-stone-900 hover:text-stone-400"
        href={GITHUB}
        target="_blank"
      >
        GitHub
      </a>
    </div>
  );
};

const MobileContactButtons = () => {
  return (
    <div className="lg:hidden">
      <div className=" flex flex-row mt-4">
        <ContactButton
          name="E-Mail"
          target={`mailto:${EMAIL}`}
          className="mr-1"
        />
        <ContactButton
          name="Telephone"
          target={`tel:${PHONE}`}
          className="ml-1"
        />
      </div>
      <div className=" flex flex-row mt-2">
        <ContactButton name="LinkedIn" target={LINKEDIN} className="mr-1" />
        <ContactButton name="GitHub" target={GITHUB} className="ml-1" />
      </div>
    </div>
  );
};

const ContactButton = ({
  name,
  target,
  className = '',
}: {
  name: string;
  target: string;
  className?: string;
}) => {
  return (
    <a
      href={target}
      className={
        `text-white font-quickMedium bg-stone-900 w-full h-12 flex justify-center items-center cursor-pointer hover:bg-stone-700 ` +
        `${className}`
      }
    >
      {name}
    </a>
  );
};

const Footer = () => {
  const router = useRouter();

  const redirectImpressum = () => {
    router.push(IMPRESSUM);
  };

  const redirectDatenschutz = () => {
    router.push(DATENSCHUTZ);
  };

  return (
    <div className=" w-full h-12 bg-stone-900 mt-24 flex flex-row justify-center items-center">
      <a
        href={IMPRESSUM}
        onClick={redirectImpressum}
        className="text-white font-quickMedium hover:cursor-pointer"
      >
        Impressum
      </a>
      <a
        href={DATENSCHUTZ}
        onClick={redirectDatenschutz}
        className="text-white font-quickMedium hover:cursor-pointer ml-4"
      >
        Datenschutzerklärung
      </a>
    </div>
  );
};

export default Portfolio;
