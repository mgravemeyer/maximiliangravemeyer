import React from 'react';
import Image from 'next/image';

import logo from '../public/media/logo.jpg';
import profilePic from '../public/media/profile.jpg';

export const Portfolio: React.FC = () => {
  return (
    <div className=" pr-4 pl-4">
      <Image className=" w-16" src={logo} alt="logo" />
      <h1 className=" font-quickLight">I’m a freelance web developer</h1>
      <Image
        className=" h-full w-auto"
        src={profilePic}
        alt="profile picture"
      />
    </div>
  );
};
