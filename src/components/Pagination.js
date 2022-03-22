import React from "react";

const Pagination = ({ paginate }) => {
  const pageNumbers = [1, 2];

  return (
    <div style={{ display: "flex" }}>
      {pageNumbers.map((number) => (
        <div key={number} style={{ margin: "5px" }}>
          <a onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
