import type { tcIEDB } from "../types/IEDB";

type TcIEDBModalProps = {
  tcIEDB: tcIEDB[];
  onClose: () => void;
};

function TcIEDBModal({ tcIEDB, onClose }: TcIEDBModalProps) {
  if (!tcIEDB || tcIEDB.length === 0) return null;
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
        <h5>T.cruzi IEDB Epitopes hits</h5>
        <table className="table table-bordered table-sm">
          <thead>
            <tr>
              <th>IEDB ID</th>
              <th>Sequence</th>
              <th>Query Start</th>
              <th>Query End</th>
              <th>Subject Start</th>
              <th>Subject End</th>
              <th>Source Molecule</th>
              
            </tr>
          </thead>
          <tbody>
            {tcIEDB.map((iedb, i) => (
              <tr key={`iedb-${i}`}>
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
  );
}

export default TcIEDBModal;