import { Job } from '../../types/Job';
import Image from 'next/image';

const JobExperience = ({ job, key }: { job: Job; key: number }) => {
  return (
    <div className="lg:border-l-2 lg:border-stone-200 lg:pl-2">
      <div className={`w-fit flex justify-center items-center mt-6`}>
        {job.image ? <Image className="max-w-[13rem] w-auto" src={job.image} alt={job.alt} /> : <></>}
      </div>
      <p className="font-quickLight">{job.translation}</p>
    </div>
  );
};

export default JobExperience;
