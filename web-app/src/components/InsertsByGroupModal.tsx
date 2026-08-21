import React from "react";

type EpitopeInfo = {
  id: string;
  epitope: string;
  numberOfPeptides: number;
  numberOfInserts: number;
};

type InsertsByGroupModalProps = {
  insertsByGroup: Record<string, number>;
  onClose: () => void;
  epitopeInfo?: EpitopeInfo;
};

const InsertsByGroupModal: React.FC<InsertsByGroupModalProps> = ({ insertsByGroup, onClose, epitopeInfo }) => {
  if (!insertsByGroup) return null;
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
          padding: "1rem",
          borderRadius: "8px",
          minWidth: "300px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflow: "auto"
        }}
        onClick={e => e.stopPropagation()}
      >
        <h5>Number of Inserts by Group</h5>
        {epitopeInfo && (
          <div style={{ marginBottom: '1rem' }}>
            <div><strong>eCruzi Epitope ID:</strong> {epitopeInfo.id}</div>
            <div>
              <strong>Peptide ({epitopeInfo.numberOfPeptides > 1 ? 'PE' : 'AF'}):</strong> {epitopeInfo.epitope}
            </div>
            <div><strong>Number of Peptides:</strong> {epitopeInfo.numberOfPeptides}</div>
            <div><strong>Number of Inserts:</strong> {epitopeInfo.numberOfInserts}</div>
          </div>
        )}
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Group</th>
              <th>Number of Inserts</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(insertsByGroup)
              .sort((a, b) => b[1] - a[1])
              .map(([group, count]) => (
                <tr key={group}>
                  <td>{group}</td>
                  <td>{count}</td>
                </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-secondary mt-3" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InsertsByGroupModal;
