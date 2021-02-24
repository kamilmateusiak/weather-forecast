import React from "react";

const TableHead: React.FC = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHead;
