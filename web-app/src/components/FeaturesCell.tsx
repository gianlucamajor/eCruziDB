import type { Annotation } from "../types/Annotation";
import type { tcIEDB } from "../types/IEDB";
import { useState } from "react";
import TcIEDBModal from "./TcIEDBModal";

type FeaturesCellProps = {
  features: {
    GenomicRegionsAnnotation: Annotation[];
    TCruziIEDB?: tcIEDB[];
  } | undefined;
  onShowAll: () => void;
};

function FeaturesCell({ features, onShowAll }: FeaturesCellProps) {
  const [showIEDBModal, setShowIEDBModal] = useState(false);

  if (!features) return null;
  const genomicRegionsAnnotation = (features.GenomicRegionsAnnotation ?? []).map(a => a.description);
  const tcEptIEDBCount = features.TCruziIEDB?.length ?? 0;
  if (genomicRegionsAnnotation.length === 0 && tcEptIEDBCount === 0) return null;
  const shown = genomicRegionsAnnotation.slice(0, 1).join(", ");
  const more =
    genomicRegionsAnnotation.length > 1 ? (
      <span
        style={{ color: "#007bff", cursor: "pointer", marginLeft: 10, textDecoration: "underline" }}
        onClick={onShowAll}
      >
        +{genomicRegionsAnnotation.length - 1}
      </span>
    ) : genomicRegionsAnnotation.length > 0 ? (
      <span
        style={{ color: "#007bff", cursor: "pointer", marginLeft: 10 }}
        onClick={onShowAll}
      >
        +
      </span>
    ) : null;

  return (
    <span style={{ whiteSpace: "normal" }}>
      {shown}
      {more}
      {tcEptIEDBCount > 0 && (
        <>
          <span
            style={{
              marginLeft: 10,
              color: "#28a745",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={e => {
              e.stopPropagation();
              setShowIEDBModal(true);
            }}
          >
            | {tcEptIEDBCount} Tc. IEDB
          </span>
          {showIEDBModal && (
            <TcIEDBModal
              tcIEDB={features.TCruziIEDB ?? []}
              onClose={() => setShowIEDBModal(false)}
            />
          )}
        </>
      )}
    </span>
  );
}

export default FeaturesCell;