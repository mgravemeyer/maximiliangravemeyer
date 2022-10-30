import { Job } from '../../types/Job';
import Image from 'next/image';

const JobExperience = ({ job }: { job: Job }) => {
  return (
    <div className="font-quickMedium mt-12">
      <div className="bg-black w-fit py-1 px-1 flex justify-center items-center">
        <Image className="h-10 w-auto mb-1" src={job.image} alt={job.alt} />
      </div>
      <p className="font-quickLight mt-4">{job.translation}</p>
    </div>
  );
};

export default JobExperience;
