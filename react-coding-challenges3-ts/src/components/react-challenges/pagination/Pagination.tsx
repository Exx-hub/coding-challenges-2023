import { useEffect, useState } from "react";
import { TTodo } from "../../../types/types";
import useFetch from "../../../hooks/useFetch";

function Pagination() {
  const { data: todos, loading } = useFetch<TTodo[]>("https://jsonplaceholder.typicode.com/todos");

  const [todosPerPage, setTodosPerPage] = useState<TTodo[]>([]);

  const [currentPage, setCurrentPage] = useState(1); // 1 2  3  4 5 6
  const [pageStart, setPageStart] = useState(0); // 0 10 20 30

  const [pageButtons, setPageButtons] = useState<number[]>([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (!todos) return; // pleasing TS
    const slicedData = todos.slice(pageStart, pageStart + 10);

    setTodosPerPage(slicedData);

    const startIndecesOfPage = todos
      .map((_e: TTodo, i: number) => {
        if (i % 10 !== 0) {
          return;
        }

        return i;
      })
      .filter((e: number | undefined) => e !== undefined) as number[];

    setPageButtons(startIndecesOfPage);
  }, [pageStart, todos]);

  // pleasing TS
  if (loading) return <div>Loading...</div>;
  if (!todos) return null;

  const itemsPerPage = 10;

  const isLastPage = currentPage * itemsPerPage >= todos.length;
  const isFirstPage = currentPage === 1;

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    setPageStart((prev) => prev + 10);
    setActivePage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
    setPageStart((prev) => prev - 10);
    setActivePage((prev) => prev - 1);
  };

  const handlePageClick = (e: number, i: number) => {
    setCurrentPage(i + 1);
    setPageStart(e);
    setActivePage(i + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-stone-100">
        <h1 className="text-orange-500 text-2xl font-bold my-4 p-2">200 TODOS with pagination</h1>
        <ul className="flex flex-col space-y-4 mb-8">
          {todosPerPage.map((e) => (
            <p key={e.id}>
              {e.id}-{e.title}
            </p>
          ))}
        </ul>

        <div className="flex space-x-2 items-center mb-4">
          <button
            disabled={isFirstPage}
            className="disabled:bg-gray-500 bg-orange-500 text-white px-2 py-1 rounded-md"
            onClick={handlePrev}
          >
            PREV
          </button>
          <h2 className="font-bold">{activePage}</h2>
          <button
            disabled={isLastPage}
            className="disabled:bg-gray-500 bg-orange-500 text-white px-2 py-1 rounded-md"
            onClick={handleNext}
          >
            NEXT
          </button>
        </div>

        <div className="flex space-x-2">
          {pageButtons?.map((e, i) => (
            <button
              key={e}
              onClick={() => handlePageClick(e, i)}
              className="border border-gray-500 w-6"
              style={{ backgroundColor: activePage === i + 1 ? "orange" : "white" }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pagination;
