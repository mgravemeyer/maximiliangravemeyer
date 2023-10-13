import { Job } from '../../types/Job';
import JobExperience from '../atoms/JobExperience';
import useTranslation from 'next-translate/useTranslation';

const JobsList = () => {
  const { t } = useTranslation('portfolio');

  const jobs: Job[] = [
    // {
    //   headline: t('horschHeadline'),
    //   translation: t('horschJob'),
    //   alt: 'Horsch Job',
    //   current: true
    // },
    {
      headline: t('horschHeadline'),
      translation: t('horschJob'),
      time: t('horschTime'),
      alt: 'Horsch Job',
      current: true
    },
    {
      headline: t('armbrHeadline'),
      translation: t('armbrJob'),
      time: t('armbrTime'),
      alt: 'Armbrüster Consulting Job',
      current: true
    },
    {
      headline: t('ttHeadline'),
      translation: t('ttJob'),
      time: t('ttTime'),
      alt: 'Tom Tailor Job',
    },
    {
      headline: t('seglerHeadline'),
      translation: t('seglerJob'),
      time: t('seglerTime'),
      alt: 'Segler Job',
    },
    {
      headline: t('miconyHeadline'),
      translation: t('miconyJob'),
      time: t('miconyTime'),
      alt: 'Micony Job',
    },
    {
      headline: t('horvathHeadline'),
      translation: t('horvathJob'),
      time: t('horvathTime'),
      alt: 'Horvath Job',
    },
  ];

  return (
    <>
      {[...jobs].map((job, key) => {
        return <JobExperience job={job} key={key} />;
      })}
    </>
  );
};

export default JobsList;
