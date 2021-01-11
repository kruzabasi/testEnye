import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  viewAll,
  allData
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
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