import type { ProteinBestHit } from "../types/ProteinBestHit";
import type { tcIEDB, HumanIEDB } from "../types/IEDB";
import { useState } from "react";
import TcIEDBModal from "./TcIEDBModal";
import HumanIEDBModal from "./HumanIEDBModal";

type FeaturesCellProps = {
  features: {
    ProteinBestHit?: ProteinBestHit;
    TCruziIEDB?: tcIEDB[];
    HumanIEDB?: HumanIEDB[];
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
  const [showTcIEDBModal, setShowTcIEDBModal] = useState(false);
  const [showHumanIEDBModal, setShowHumanIEDBModal] = useState(false);

  if (!features) return null;
  
  const proteinDescription = features.ProteinBestHit?.protein_description ?? null;
  const tcEptIEDBCount = features.TCruziIEDB?.length ?? 0;
  const humanIEDBCount = features.HumanIEDB?.length ?? 0;
  
  if (!proteinDescription && tcEptIEDBCount === 0 && humanIEDBCount === 0) return null;

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
              setShowTcIEDBModal(true);
            }}
          >
            {tcEptIEDBCount} Tc. IEDB
          </span>
          {showTcIEDBModal && (
            <TcIEDBModal
              tcIEDB={features.TCruziIEDB ?? []}
              epitopeInfo={epitopeInfo}
              onClose={() => setShowTcIEDBModal(false)}
            />
          )}
        </>
      )}
      {humanIEDBCount > 0 && (
        <>
          {(proteinDescription || tcEptIEDBCount > 0) && <span style={{ marginLeft: 10, color: "#6c757d" }}>|</span>}
          <span
            style={{
              marginLeft: (proteinDescription || tcEptIEDBCount > 0) ? 10 : 0,
              color: "#dc3545",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={e => {
              e.stopPropagation();
              setShowHumanIEDBModal(true);
            }}
          >
            {humanIEDBCount} Human IEDB
          </span>
          {showHumanIEDBModal && (
            <HumanIEDBModal
              humanIEDB={features.HumanIEDB ?? []}
              epitopeInfo={epitopeInfo}
              onClose={() => setShowHumanIEDBModal(false)}
            />
          )}
        </>
      )}
    </span>
  );
}

export default FeaturesCell;