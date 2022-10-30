import ContactButton from '../atoms/ContactButton';
import useTranslation from 'next-translate/useTranslation';
import { EMAIL, PHONE, LINKEDIN, GITHUB } from '../../const';

const MobileContactButtons = ({
  hideOnDesktop,
}: {
  hideOnDesktop: boolean;
}) => {
  const { t, lang } = useTranslation('portfolio');

  return (
    <div className={`${hideOnDesktop ? 'lg:hidden' : ''}`}>
      <div className=" flex flex-row mt-4">
        <ContactButton
          name="E-Mail"
          target={`mailto:${EMAIL}`}
          className="mr-1"
        />
        <ContactButton
          name={t('phoneButton')}
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

export default MobileContactButtons;
