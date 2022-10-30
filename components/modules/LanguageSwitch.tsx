import logo from '../../public/media/logo.jpg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Footer from './Footer';

const LanguageSwitch = () => {
  const router = useRouter();

  const selectEnglish = () => {
    router.push('en/portfolio');
  };

  const selectGerman = () => {
    router.push('de/portfolio');
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center">
      <div className="flex flex-row absolute left-5 top-5 justify-center items-center">
        <Image className="w-8 h-8" src={logo} alt="logo" />
        <p className="ml-2 font-quickLight">Maximilian Gravemeyer</p>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-row">
          <p
            className="font-quickLight text-3xl cursor-pointer hover-text"
            onClick={selectEnglish}
          >
            English
          </p>
          <p className="font-quickLight text-3xl mx-4"> / </p>
          <p
            className="font-quickLight text-3xl cursor-pointer hover-text"
            onClick={selectGerman}
          >
            Deutsch
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LanguageSwitch;
