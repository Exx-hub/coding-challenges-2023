import { useEffect, useState } from "react";
import { TJobStory } from "../../../types/types";

type TInfiniteJobStory = {
  jobId: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

function InfiniteJobStory({ jobId, loading, setLoading }: TInfiniteJobStory) {
  const [jobStory, setJobStory] = useState<TJobStory | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`);
      const data = await response.json();
      //   console.log(data);
      setJobStory(data);
    };

    fetchData();
  }, [jobId, setLoading]);

  return (
    <div>
      <h1 className="p-5 m-4 border border-gray-400">{jobStory?.title}</h1>
    </div>
  );
}

export default InfiniteJobStory;
