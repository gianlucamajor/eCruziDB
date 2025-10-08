import type { ProteinBestHit } from "../types/ProteinBestHit";
import type { tcIEDB } from "../types/IEDB";
import { useState } from "react";
import TcIEDBModal from "./TcIEDBModal";

type FeaturesCellProps = {
  features: {
    ProteinBestHit?: ProteinBestHit;
    TCruziIEDB?: tcIEDB[];
  } | undefined;
  onShowAll: () => void;
  epitopeInfo?: {
    id: string;
    epitope: string;
    numberOfPeptides: number;
    numberOfInserts: number;
  };
};

function FeaturesCell({ features, onShowAll, epitopeInfo }: FeaturesCellProps) {
  const [showIEDBModal, setShowIEDBModal] = useState(false);

  if (!features) return null;
  
  const proteinDescription = features.ProteinBestHit?.protein_description ?? null;
  const tcEptIEDBCount = features.TCruziIEDB?.length ?? 0;
  
  if (!proteinDescription && tcEptIEDBCount === 0) return null;

  return (
    <span style={{ whiteSpace: "normal" }}>
      {proteinDescription && (
        <span 
          style={{ color: "#007bff", cursor: "pointer" }}
          onClick={onShowAll}
        >
          {proteinDescription}
        </span>
      )}
      {tcEptIEDBCount > 0 && (
        <>
          {proteinDescription && <span style={{ marginLeft: 10, color: "#6c757d" }}>|</span>}
          <span
            style={{
              marginLeft: proteinDescription ? 10 : 0,
              color: "#28a745",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={e => {
              e.stopPropagation();
              setShowIEDBModal(true);
            }}
          >
            {tcEptIEDBCount} Tc. IEDB
          </span>
          {showIEDBModal && (
            <TcIEDBModal
              tcIEDB={features.TCruziIEDB ?? []}
              epitopeInfo={epitopeInfo}
              onClose={() => setShowIEDBModal(false)}
            />
          )}
        </>
      )}
    </span>
  );
}

export default FeaturesCell;