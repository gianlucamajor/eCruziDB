import React from "react";

type InsertsCellProps = {
  value: number;
  insertsByGroup?: Record<string, number>;
  onShow: (insertsByGroup: Record<string, number>) => void;
};

const InsertsCell: React.FC<InsertsCellProps> = ({ value, insertsByGroup, onShow }) => {
  return (
    <span className="inserts-col-cell" style={{ display: "block", width: "100%" }}>
      {insertsByGroup ? (
        <span
          style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }}
          title="View inserts by group"
          onClick={e => {
            e.stopPropagation();
            onShow(insertsByGroup);
          }}
        >
          {value}
        </span>
      ) : (
        value
      )}
    </span>
  );
};

export default InsertsCell;
