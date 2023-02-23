import { Job } from '../../types/Job';
import JobExperience from '../atoms/JobExperience';
import useTranslation from 'next-translate/useTranslation';

const JobsList = () => {
  const { t } = useTranslation('portfolio');

  const jobs: Job[] = [
    {
      headline: t('horschHeadline'),
      translation: t('horschJob'),
      alt: 'Horsch Job',
    },
    {
      headline: t('ttHeadline'),
      translation: t('ttJob'),
      alt: 'Tom Tailor Job',
    },
    {
      headline: t('armbrHeadline'),
      translation: t('armbrJob'),
      alt: 'Armbrüster Consulting Job',
    },
    {
      headline: t('seglerHeadline'),
      translation: t('seglerJob'),
      alt: 'Segler Job',
    },
    {
      headline: t('miconyHeadline'),
      translation: t('miconyJob'),
      alt: 'Micony Job',
    },
    {
      headline: t('horvathHeadline'),
      translation: t('horvathJob'),
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
