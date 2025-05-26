import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import type { TableColumn } from "react-data-table-component";
import type { Epitope } from "../types/Epitope";

// Modal component
function FeaturesModal({ features, onClose }: { features: string[]; onClose: () => void }) {
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
        <h5>All Features</h5>
        <ul>
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <button className="btn btn-secondary mt-3" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

// Main Table component
function Table() {
  const [data, setData] = useState<Epitope[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [modalFeatures, setModalFeatures] = useState<string[] | null>(null);

  useEffect(() => {
    fetch("/data/epitopes-data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError("Failed to load data: " + err.message));
  }, []);

  // Filter data based on search input
  const filteredData = data.filter(
    (epitope) =>
      (epitope.Epitope ?? "").toLowerCase().includes(search.toLowerCase()) ||
      (epitope.ID ?? "").toLowerCase() === search.toLowerCase() ||
      (epitope.Features?.some(feature => feature.toLowerCase().includes(search.toLowerCase())) ?? false)
  );

  // Define columns (moved inside component to access setModalFeatures)
  const columns: TableColumn<Epitope>[] = [
    { name: "ID", selector: (row: Epitope) => row.ID ?? "", sortable: true, width: "100px" },
    { name: "Epitope", selector: (row: Epitope) => row.Epitope ?? "", minWidth: "400px", wrap: true},
    { name: "Peptides", selector: (row: Epitope) => row["Number of Peptides"] ?? "", width: "100px", sortable: true },
    { name: "Inserts", selector: (row: Epitope) => row["Number of Inserts"] ?? "", width: "100px", sortable: true },
    { name: "Genomic Regions", selector: (row: Epitope) => row["Number of Genomic Regions"] ?? "", width: "150px", sortable: true},
    { 
      name: "Features", 
      cell: (row: Epitope) => {
        if (!row.Features || row.Features.length === 0) return "";
        const shown = row.Features.slice(0, 5).join(", ");
        const more = row.Features.length > 5 ? (
          <span
            style={{ color: "#007bff", cursor: "pointer", marginLeft: 10, textDecoration: "underline" }}
            onClick={() => setModalFeatures(row.Features)}
          >
            ...and {row.Features.length - 5} more
          </span>
        ) : "";
        return (
          <span style={{ whiteSpace: "normal" }}>
            {shown}
            {more}
           </span>
        );
      },
      wrap: true 
    },
  ];

  return (
    <div className="container my-5" style={{ maxHeight: "80vh", display: "flex", flexDirection: "column" }}>
      <div
        className="input-group"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          background: "white",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <input
          type="search"
          placeholder="Search"
          className="form-control border-end-0 border rounded-pill"
          id="example-search-input"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div style={{ flex: 1, minHeight: 0 }}>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationPerPage={25}
          paginationRowsPerPageOptions={[25, 50, 100]}
          fixedHeader
          fixedHeaderScrollHeight="60vh"
        />
      </div>
      {modalFeatures && (
        <FeaturesModal features={modalFeatures} onClose={() => setModalFeatures(null)} />
      )}
    </div>
  );
}
export default Table