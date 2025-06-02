import React from "react";

type Props = {
  count: number | string;
  regions: string[];
  onShow: () => void;
};

const GenomicRegionsCell: React.FC<Props> = ({ count, regions, onShow }) => (
  <span>
    {count}
    {Array.isArray(regions) && regions.length > 0 && (
      <button
        style={{ background: "none", border: "none", marginLeft: 8, cursor: "pointer" }}
        title="Show Genomic Regions"
        onClick={e => {
          e.stopPropagation();
          onShow();
        }}
      >
        <span style={{ fontSize: 14, verticalAlign: "middle" }} role="img" aria-label="link">🔗</span>
      </button>
    )}
  </span>
);

export default GenomicRegionsCell;