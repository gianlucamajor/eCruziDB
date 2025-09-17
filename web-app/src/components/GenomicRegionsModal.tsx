import { useState } from "react";

type GenomicRegionsModalProps = {
  regions: string[]; // List of genomic regions
  onClose: () => void;
  igvUrl?: string; // Optional: URL for IGV browser
  epitopeInfo?: {
    id: string;
    epitope: string;
    numberOfPeptides: number;
    numberOfInserts: number;
  };
};

function GenomicRegionsModal({ regions, onClose, igvUrl, epitopeInfo }: GenomicRegionsModalProps) {
  const igvBaseUrl = import.meta.env.VITE_IGV_BASE_URL || "http://localhost:8080"; // fallback if not set
  const [currentIgvUrl, setCurrentIgvUrl] = useState<string | undefined>(igvUrl);

  const handleRegionClick = (region: string) => {
    setCurrentIgvUrl(`${igvBaseUrl}/igv-webapp/?locus=${encodeURIComponent(region)}`);
  };

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
        <h5>Epitope Genomic Regions</h5>
        <div style={{ 
          marginBottom: "0.5rem", 
          fontSize: "0.95em",
          background: "#fffbe6",
          border: "1px solid #ffe58f",
          borderRadius: "4px",
          padding: "0.5rem"
        }}>
          <span style={{ fontWeight: 500 }}>
            eCruzi Epitope: {epitopeInfo?.epitope ?? "-"} |{" "}
            ID: {epitopeInfo?.id ?? "-"} |{" "}
            Peptides: {epitopeInfo?.numberOfPeptides ?? "-"} |{" "}
            Inserts: {epitopeInfo?.numberOfInserts ?? "-"}
          </span>
        </div>
        <div style={{ maxHeight: "90px", overflowY: "auto", marginBottom: "1rem", fontSize: "0.85rem" }}>
          <table className="table table-sm mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Region</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {regions.map((region, idx) => {
                let isActive = false;
                if (currentIgvUrl) {
                  const locusMatch = currentIgvUrl.match(/[?&]locus=([^&]+)/);
                  if (locusMatch && decodeURIComponent(locusMatch[1]) === region) {
                    isActive = true;
                  }
                }
                const cellStyle = isActive ? { background: "#f0f0f0" } : undefined;
                return (
                  <tr key={idx}>
                    <td style={cellStyle}>{idx + 1}</td>
                    <td style={cellStyle}>
                      <a
                        href="#"
                        style={{ textDecoration: "underline", color: "#007bff", cursor: "pointer" }}
                        title="Show this region in IGV"
                        onClick={e => {
                          e.preventDefault();
                          handleRegionClick(region);
                        }}
                      >
                        {region}
                      </a>
                    </td>
                    <td style={cellStyle}></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={{ margin: "1rem 0" }}>
          <iframe
            src={currentIgvUrl}
            title="IGV Browser"
            style={{ width: "100%", height: "50vh", border: "1px solid #ccc" }}
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