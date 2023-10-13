import { Job } from '../../types/Job';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

const JobExperience = ({ job, index }: { job: Job; index: number }) => {
  const { t } = useTranslation('portfolio');

  console.log(index)

  return (
    <div className={`lg:border-l-2 ${job.current ? 'lg:border-stone-900' : 'lg:border-stone-200 opacity-60' } ${index !== 0 ? 'mt-8' : 'mt-3'} lg:pl-2`}>
        {job.image ? <Image className="max-w-[13rem] w-auto mb-1" src={job.image} alt={job.alt} /> : <h3 className='font-quickBold mb-1'>{job.headline}</h3>}
        <p className={`text-sm mb-2 ${job.current ? 'text-black ' : 'text-gray-500'}`}>{job.time}</p>
        <p className="font-quickLight">{job.translation}</p>
    </div>
  );
};

export default JobExperience;
