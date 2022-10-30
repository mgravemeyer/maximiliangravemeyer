import useTranslation from 'next-translate/useTranslation';

const SkillsList = () => {
  const { t, lang } = useTranslation('portfolio');

  return (
    <div className="mt-8">
      <p className="font-quickBold text-lg">{t('skillsHeadline')}</p>
      <p className="font-quickLight mt-1">• {t('firstSkill')}</p>
      <p className="font-quickLight mt-1">• {t('secondSkill')}</p>
      <p className="font-quickLight mt-1">• {t('thirdSkill')}</p>
    </div>
  );
};

export default SkillsList;
