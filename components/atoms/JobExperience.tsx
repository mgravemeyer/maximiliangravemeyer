import { Job } from '../../types/Job';
import Image from 'next/image';

const JobExperience = ({ job }: { job: Job }) => {
  return (
    <div className="font-quickMedium mt-12">
      <div className="w-fit py-1 px-1 flex justify-center items-center">
        <Image
          className="max-w-[13rem] h-[2rem] w-auto
        "
          src={job.image}
          alt={job.alt}
        />
      </div>
      <p className="font-quickLight mt-4">{job.translation}</p>
    </div>
  );
};

export default JobExperience;
