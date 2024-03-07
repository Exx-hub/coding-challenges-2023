import { useEffect, useState } from "react";
import { TJobStory } from "../../../types/types";

type JobStoryProps = {
  jobId: number;
};

function JobStory({ jobId }: JobStoryProps) {
  const [jobStory, setJobStory] = useState<TJobStory | null>(null);

  console.log(jobStory);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`);
      const data = await response.json();
      //   console.log(data);
      setJobStory(data);
    };

    fetchData();
  }, [jobId]);

  const getDateFormat = () => {
    if (jobStory?.time) {
      const d = new Date(jobStory.time * 1000);

      return d.toLocaleString();
    } else {
      return false;
    }
  };

  return (
    <li className="border border-x-gray-300 bg-white p-4">
      {jobStory?.url ? (
        <a href={jobStory.url} target="_blank" className="font-bold text-blue-500">
          {jobStory?.title}
        </a>
      ) : (
        <h3 className="font-bold">{jobStory?.title}</h3>
      )}
      <div className="text-sm text-gray-500">
        <span>By {jobStory?.by} ·</span>
        <span> {getDateFormat() ? getDateFormat() : "Loading"}</span>
      </div>
    </li>
  );
}

export default JobStory;
