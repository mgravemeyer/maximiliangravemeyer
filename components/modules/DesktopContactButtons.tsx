import { EMAIL, PHONE, LINKEDIN, GITHUB } from '../../const';

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

export default DesktopContactButtons;
