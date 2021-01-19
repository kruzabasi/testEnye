import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  viewAll,
  currentPage,
  allData
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageClass = n => (currentPage == n ? "page-item" : "current-page-item");

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={pageClass(number)}>
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li>
          <a onClick={() => viewAll()} href="#">
            {allData ? "view by page" : "view all"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
