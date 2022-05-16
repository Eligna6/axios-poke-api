import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <div className="pagination">
      <aside>
        <button className="pagination-btn" onClick={onLeftClick}>
          <p>👈</p>
        </button>
        <span>
          {page} de {totalPages}
        </span>
        <button className="pagination-btn" onClick={onRightClick}>
          <p>👉</p>
        </button>
      </aside>
    </div>
  );
};

export default Pagination;
