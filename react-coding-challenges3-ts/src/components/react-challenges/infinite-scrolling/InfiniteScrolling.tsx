import { useCallback, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import InfiniteJobStory from "./InfiniteJobStory";

function InfiniteScrolling() {
  const [posts, setPosts] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://hacker-news.firebaseio.com/v0/jobstories.json");
      const data = await response.json();

      setPosts(data);
    };

    fetchData();
  }, []);

  const handleScroll = useCallback(() => {
    // height of content
    // console.log("height of page content", document.documentElement.scrollHeight);

    // height of scrolled space from top
    // console.log("top", document.documentElement.scrollTop);

    // current viewport or screen height
    // console.log("window height", window.innerHeight);

    // if equal, meaning bottom has been reached, fetch new items
    // +1 is for sure / guarantee
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      addPage();
    }
  }, []);

  const addPage = () => {
    console.log("adding page");
    setTimeout(() => {
      console.log("now");
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const itemCount = page * 10;
  //   const lastPage = posts.length < itemCount;
  const slicedPosts = posts.slice(0, itemCount);

  return (
    <div className="container mx-auto">
      <div className="bg-stone-100">
        <h1 className="text-orange-500 text-2xl font-bold my-4 p-2">INFINITE SCROLLING JOBS</h1>
        <ul className="flex flex-col space-y-4 mb-8">
          {slicedPosts.map((e) => (
            <InfiniteJobStory key={e} jobId={e} loading={loading} setLoading={setLoading} />
          ))}
        </ul>
        {loading && (
          <RotatingLines
            visible={true}
            width="96"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            strokeColor="gray"
          />
        )}
      </div>
    </div>
  );
}

export default InfiniteScrolling;
