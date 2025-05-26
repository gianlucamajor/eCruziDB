import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import type { TableColumn } from "react-data-table-component";
import type { Epitope } from "../types/Epitope";

// Define columns
const columns: TableColumn<Epitope>[] = [
  { name: "ID", selector: (row: Epitope) => row.ID ?? "", sortable: true, width: "100px" },
  { name: "Epitope", selector: (row: Epitope) => row.Epitope ?? "", minWidth: "400px", wrap: true},
  { name: "Peptides", selector: (row: Epitope) => row["Number of Peptides"] ?? "", width: "100px", sortable: true },
  { name: "Inserts", selector: (row: Epitope) => row["Number of Inserts"] ?? "", width: "100px", sortable: true },
  { name: "Genomic Regions", selector: (row: Epitope) => row["Number of Genomic Regions"] ?? "", width: "150px", sortable: true},
  { name: "Features", selector: (row: Epitope) => row.Features ? row.Features.join(", ") : "", wrap: true },

];

// { name: "MSA", selector: (row: Epitope) => row.MSA ?? "" },
// { name: "Genomic Region Locus", selector: (row: Epitope) => (row["Genomic Region Locus"] ? row["Genomic Region Locus"].join(", ") : "") },

function Table() {
  const [data, setData] = useState<Epitope[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

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
    </div>
  );
}
export default Table