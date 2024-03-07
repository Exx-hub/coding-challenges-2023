import { useEffect, useState } from "react";
import JobStory from "./JobStory";

function JobsBoard() {
  const [posts, setPosts] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
      const data = await response.json();

      setPosts(data);
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const itemCount = page * 6;
  const lastPage = posts.length < itemCount;
  const slicedPosts = posts.slice(0, itemCount);

  return (
    <div className="container mx-auto">
      <div className="bg-stone-100">
        <h1 className="text-orange-500 text-2xl font-bold my-2 p-2">Hacker News Jobs Board</h1>
        <ul className="flex flex-col space-y-4">
          {slicedPosts.map((jobId) => (
            <JobStory key={jobId} jobId={jobId} />
          ))}
        </ul>

        {!lastPage && (
          <button
            disabled={lastPage}
            onClick={handleLoadMore}
            className="bg-orange-600 text-white text-xs px-3 py-1 rounded-sm my-4"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default JobsBoard;
