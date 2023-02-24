import React from 'react';
import Image from 'next/image';
import DesktopContactButtons from '../components/modules/DesktopContactButtons';
import MobileContactButtons from '../components/modules/MobileContactButtons';
import Footer from '../components/modules/Footer';
import SkillsList from '../components/modules/SkillsList';
import JobsList from '../components/modules/JobsList';

import useTranslation from 'next-translate/useTranslation';

import logo from '../public/media/logo.jpg';
import profilePic from '../public/media/profile.jpg';

const Portfolio: React.FC = () => {
  const { t, lang } = useTranslation('portfolio');

  return (
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
          <div className="fle flex-col justify-start items-center">
            <Image
              className="mt-4 lg:mt-0 w-full"
              src={profilePic}
              alt="profile picture"
            />
            <MobileContactButtons hideOnDesktop />
            <div className="lg:w-[450px] mt-12">
              <p className="font-quickBold text-lg">{t('aboutHeadline')}</p>
              <p className="font-quickLight mt-1">{t('description')}</p>
              <SkillsList />
              <p className="font-quickBold mt-12 text-lg flex items-center">
                {t('projectsSeparator')}
              </p>
              <JobsList />
              <p className="font-quickBold text-lg mt-16">
                {t('contactSeparator')}
              </p>
              <MobileContactButtons hideOnDesktop={false} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
