import type { ProteinBestHit } from "../types/ProteinBestHit";

function FeaturesModal({
  features,
  onClose,
}: {
  features: {
    ProteinBestHit?: ProteinBestHit;
  };
  onClose: () => void;
}) {
  if (!features || !features.ProteinBestHit) return null;

  const hit = features.ProteinBestHit;
  const ncbiUrl = `https://www.ncbi.nlm.nih.gov/ipg/${hit.protein_id}`;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          minWidth: "400px",
          maxWidth: "90vw",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h5>Protein</h5>
        <div style={{ marginBottom: "1rem" }}>
          <p>
            <strong>ID:</strong> {hit.protein_id}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            <a
              href={ncbiUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007bff", textDecoration: "underline" }}
            >
              {hit.protein_description}
            </a>
          </p>
        </div>
        <button className="btn btn-secondary mt-3" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default FeaturesModal;