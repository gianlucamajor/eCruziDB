import type { Annotation } from "../types/Annotation";

function FeaturesModal({
  features,
  onClose,
}: {
  features: {
    GenomicRegionsAnnotation: Annotation[];
  };
  onClose: () => void;
}) {
  if (!features) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          minWidth: "300px",
          maxWidth: "90vw",
          maxHeight: "80vh",
          overflowY: "auto"
        }}
        onClick={e => e.stopPropagation()}
      >
        <h5>Annotated Genomic Regions </h5>
        <ul>
          {(features.GenomicRegionsAnnotation ?? []).map((a, i) => (
            <li key={`ann-${i}`}> {a.genomic_region} | {a.type} | {a.description} | {a.coverage} </li>
          ))}
        </ul>
        <button className="btn btn-secondary mt-3" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default FeaturesModal;