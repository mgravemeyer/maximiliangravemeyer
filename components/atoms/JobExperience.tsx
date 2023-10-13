import { Job } from '../../types/Job';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const JobExperience = ({ job, key }: { job: Job; key: number }) => {
  const { t } = useTranslation('portfolio');
  const currentLabel = t('currentProject');

  return (
    <div className="lg:border-l-2 lg:border-stone-200 mt-8 lg:pl-2">
        {job.image ? <Image className="max-w-[13rem] w-auto mb-1" src={job.image} alt={job.alt} /> : <h3 className='font-quickBold mb-1'>{job.headline}</h3>}
        <p className='text-sm text-gray-500 mb-2'>{job.time}</p>
        <p className="font-quickLight">{job.translation}</p>
    </div>
  );
};

export default JobExperience;
