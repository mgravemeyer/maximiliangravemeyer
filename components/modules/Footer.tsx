import { IMPRESSUM, DATENSCHUTZ } from '../../const';
import { useRouter } from 'next/router';

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

export default Footer;
