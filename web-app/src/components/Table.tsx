import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import type { TableColumn } from "react-data-table-component";
import type { Epitope } from "../types/Epitope";
import FeaturesModal from "./FeaturesModal";
import FeaturesCell from "./FeaturesCell";
import SearchBar from "./SearchBar";
import PeptidesCell from "./PeptidesCell";
import PeptidesModal from "./PeptidesModal";
import GenomicRegionsModal from "./GenomicRegionsModal";
import { FaLink } from "react-icons/fa"; // Install react-icons if not present
                             
                             
// Main Table component
function Table() {
  const [data, setData] = useState<Epitope[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [modalFeatures, setModalFeatures] = useState<string[] | null>(null);
  const [peptidesHtml, setPeptidesHtml] = useState<string | null>(null);
  const [modalGenomicRegions, setModalGenomicRegions] = useState<{regions: string[], igvUrl?: string} | null>(null);

  useEffect(() => {
    fetch("data/epitopes-data.json")
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
    { name: "Epitope", selector: (row: Epitope) => row.Epitope ?? "", width: "400px", wrap: true },
    {
      name: "Peptides",
      selector: (row: Epitope) => row["Number of Peptides"] ?? 0, // for sorting
      cell: (row: Epitope) => (
        <PeptidesCell
          value={row["Number of Peptides"]}
          id={row.ID}
          onShow={() => setPeptidesHtml(`mview/${row.MSA}`)}
        />
      ),
      width: "100px",
      sortable: true,
    },
    { name: "Inserts", selector: (row: Epitope) => row["Number of Inserts"] ?? "", width: "100px", sortable: true },
    { 
      name: "Genomic Regions", 
      selector: (row: Epitope) => row["Number of Genomic Regions"] ?? "", 
      width: "150px", 
      sortable: true,
      cell: (row: Epitope) => (
        <span>
          {row["Number of Genomic Regions"] ?? ""}
          {Array.isArray(row["Genomic Region Locus"]) && row["Genomic Region Locus"].length > 0 && (
            <button
              style={{ background: "none", border: "none", marginLeft: 8, cursor: "pointer" }}
              title="Show Genomic Regions"
              onClick={e => {
                e.stopPropagation();
                setModalGenomicRegions({
                  regions: row["Genomic Region Locus"],
                  igvUrl: "http://localhost:8080/igv-webapp/?locus=" + row["Genomic Region Locus"][0] // Replace with your IGV URL logic
                });
              }}
            >
              <FaLink />
            </button>
          )}
        </span>
      )
    },
    { name: "Features", cell: (row: Epitope) => (<FeaturesCell features={row.Features} onShowAll={() => setModalFeatures(row.Features)} />), wrap: true },
  ];

  return (
    <div className="container my-5" style={{ maxHeight: "80vh"}}>
      <SearchBar value={search} onChange={setSearch} />
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
      {peptidesHtml && (
        <PeptidesModal htmlFile={peptidesHtml} onClose={() => setPeptidesHtml(null)} />
      )}
      {modalGenomicRegions && (
        <GenomicRegionsModal
          regions={modalGenomicRegions.regions}
          igvUrl={modalGenomicRegions.igvUrl}
          onClose={() => setModalGenomicRegions(null)}
        />
      )}
    </div>
  );
}
export default Table