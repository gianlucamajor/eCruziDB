type GenomicRegionsModalProps = {
  regions: string[]; // List of genomic regions
  onClose: () => void;
  igvUrl?: string; // Optional: URL for IGV browser
};

function GenomicRegionsModal({ regions, onClose, igvUrl }: GenomicRegionsModalProps) {
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
          minWidth: "70vw",
          minHeight: "70vh",
          maxWidth: "98vw",
          maxHeight: "98vh",
          overflow: "hidden",
          position: "relative"
        }}
        onClick={e => e.stopPropagation()}
      >
        <h5>Genomic Regions</h5>
        <div style={{ maxHeight: "200px", overflowY: "auto", marginBottom: "1rem", fontSize: "0.85rem" }}>
          <table className="table table-sm mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              {regions.map((region, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <h6>IGV Browser</h6>
          <iframe
            src={igvUrl}
            title="IGV Browser"
            style={{ width: "100%", height: "60vh", border: "1px solid #ccc" }}
          />
        </div>
        <button
          className="btn btn-secondary mt-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default GenomicRegionsModal;