import type { ProteinBestHit } from "../types/ProteinBestHit";

function FeaturesModal({
  features,
  epitope,
  epizapId,
  numberOfPeptides,
  onClose,
}: {
  features?: {
    ProteinBestHit?: ProteinBestHit;
  } | null | undefined;
  epitope?: string;
  epizapId?: string;
  numberOfPeptides?: number;
  onClose: () => void;
}) {
  if (!features || !features.ProteinBestHit) return null;

  const hit = features.ProteinBestHit;
  const peptideType = Number(numberOfPeptides ?? 0) > 1 ? "PE" : "AF";
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
        <h5>Protein best hit</h5>
        <div style={{ marginBottom: "0.5rem" }}>
          {epizapId && (
            <p>
              <strong>Epizap ID:</strong> {epizapId}
            </p>
          )}
          {epitope && (
            <p>
              <strong>Peptide ({peptideType}):</strong> {epitope}
            </p>
          )}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <table style={{ width: "100%", fontSize: "1rem" }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>ID</td>
                <td>
                  <a
                    href={ncbiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007bff", textDecoration: "underline" }}
                  >
                    {hit.protein_id}
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Description</td>
                <td>{hit.protein_description}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Percent identity</td>
                <td>{hit.pident}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Length</td>
                <td>{hit.length}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Mismatches</td>
                <td>{hit.mismatches}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Gap opens</td>
                <td>{hit.gap_opens}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Query start</td>
                <td>{hit.qstart}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Query end</td>
                <td>{hit.qend}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Subject start</td>
                <td>{hit.sstart}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Subject end</td>
                <td>{hit.send}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>E-value</td>
                <td>{hit.evalue}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", paddingRight: 10, verticalAlign: "top" }}>Bitscore</td>
                <td>{hit.bitscore}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-secondary mt-3" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default FeaturesModal;