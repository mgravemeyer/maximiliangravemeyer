import { Job } from '../../types/Job';
import JobExperience from '../atoms/JobExperience';
import useTranslation from 'next-translate/useTranslation';

import armbr from '../../public/media/projects/armbr.jpg';
import tt from '../../public/media/projects/tt.jpg';
import segler from '../../public/media/projects/segler.jpg';
import micony from '../../public/media/projects/micony.jpg';

const JobsList = () => {
  const { t, lang } = useTranslation('portfolio');

  const jobs: Job[] = [
    {
      image: tt,
      translation: t('ttJob'),
      alt: 'Tom Tailor Job',
    },
    {
      image: armbr,
      translation: t('armbrJob'),
      alt: 'Armbrüster Consulting Job',
    },
    {
      image: segler,
      translation: t('seglerJob'),
      alt: 'Segler Job',
    },
    {
      image: micony,
      translation: t('miconyJob'),
      alt: 'Micony Job',
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
