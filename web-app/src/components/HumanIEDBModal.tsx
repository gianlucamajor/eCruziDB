import type { HumanIEDB } from "../types/IEDB";

type HumanIEDBModalProps = {
  humanIEDB: HumanIEDB[];
  onClose: () => void;
  epitopeInfo?: {
    id: string;
    epitope: string;
    numberOfPeptides: number;
    numberOfInserts: number;
  };
};

function HumanIEDBModal({ humanIEDB, onClose, epitopeInfo }: HumanIEDBModalProps) {
  if (!humanIEDB || humanIEDB.length === 0) return null;
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
          borderRadius: "8px",
          minWidth: "300px",
          maxWidth: "90vw",
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column"
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Static header section */}
        <div style={{ padding: "2rem 2rem 0" }}>
          <h5>Human IEDB Epitopes hits</h5>
          <div style={{ 
            marginBottom: "0.5rem", 
            fontSize: "0.95em",
            background: "#fffbe6",
            border: "1px solid #ffe58f",
            borderRadius: "4px",
            padding: "0.5rem"
          }}>
            <span style={{ fontWeight: 500 }}>
              Peptide ({epitopeInfo && epitopeInfo.numberOfPeptides > 1 ? "PE" : "AF"}): {epitopeInfo?.epitope ?? "-"} |{" "}
              ID: {epitopeInfo?.id ?? "-"} |{" "}
              Peptides: {epitopeInfo?.numberOfPeptides ?? "-"} |{" "}
              Inserts: {epitopeInfo?.numberOfInserts ?? "-"}
            </span>
          </div>
        </div>

        {/* Scrollable content section */}
        <div style={{ 
          padding: "0 2rem 2rem",
          overflowY: "auto",
          flex: 1
        }}>
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                <th>IEDB ID</th>
                <th>Sequence</th>
                <th>eCruzi Start</th>
                <th>eCruzi End</th>
                <th>Human Start</th>
                <th>Human End</th>
                <th>Source Molecule</th>
              </tr>
            </thead>
            <tbody>
              {humanIEDB.map((iedb, i) => (
                <tr key={`human-iedb-${i}`}>
                  <td>
                    <a href={`https://www.iedb.org/epitope/${iedb.IEDB_id}`} target="_blank" rel="noopener noreferrer">
                      {iedb.IEDB_id}
                    </a>
                  </td>
                  <td>{iedb.sequence}</td>
                  <td>{iedb.qstart}</td>
                  <td>{iedb.qend}</td>
                  <td>{iedb.sstart}</td>
                  <td>{iedb.send}</td>
                  <td>
                    <a href={iedb.source_molecule_IRI} target="_blank" rel="noopener noreferrer">
                      {iedb.source_molecule}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-secondary mt-3" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default HumanIEDBModal;