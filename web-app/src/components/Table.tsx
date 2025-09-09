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
import GenomicRegionsCell from "./GenomicRegionsCell";


// Main Table component
function Table() {
  const [data, setData] = useState<Epitope[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [modalFeatures, setModalFeatures] = useState<Epitope["Features"] | null>(null);
  const [peptidesHtml, setPeptidesHtml] = useState<string | null>(null);
  const [modalGenomicRegions, setModalGenomicRegions] = useState<{
    regions: string[],
    igvUrl?: string,
    epitopeInfo?: {
      id: string;
      epitope: string;
      numberOfPeptides: number;
      numberOfInserts: number;
    }
  } | null>(null);

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
      (epitope.Features?.Annotation?.some(a =>
        a.description?.toLowerCase().includes(search.toLowerCase())
      ) ?? false) ||
      (epitope.Features?.tcIEDB?.some(i =>
        i.sequence?.toLowerCase().includes(search.toLowerCase())
      ) ?? false)
  );

  const igvBaseUrl = import.meta.env.VITE_IGV_BASE_URL;

  // Define columns (moved inside component to access setModalFeatures)
  const columns: TableColumn<Epitope>[] = [
    {
      name: (
        <span title="Unique identifier for the epitope" style={{ cursor: "help" }}>
          ID
        </span>
      ),
      selector: (row: Epitope) => row.ID ?? "",
      sortable: true,
      width: "100px",
    },
    {
      name: (
        <span title="Amino acid sequence identified as an epitope" style={{ cursor: "help" }}>
          Epitope
        </span>
      ),
      selector: (row: Epitope) => row.Epitope ?? "",
      width: "400px",
      wrap: true,
      cell: (row: Epitope) => (
        <span className="epitope-col-cell" style={{ display: "block", width: "100%" }}>
          {row.Epitope ?? ""}
        </span>
      ),
    },
    {
      name: (
        <span title="Number of peptides associated with this epitope and link to show their MSA" style={{ cursor: "help" }}>
          Peptides
        </span>
      ),
      selector: (row: Epitope) => row["Number of Peptides"] ?? 0,
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
    {
      name: (
        <span title="Number of inserts (nucleotides sequences) for this epitope" style={{ cursor: "help" }}>
          Inserts
        </span>
      ),
      selector: (row: Epitope) => row["Number of Inserts"] ?? "",
      width: "100px",
      sortable: true,
      cell: (row: Epitope) => (
        <span className="inserts-col-cell" style={{ display: "block", width: "100%" }}>
          {row["Number of Inserts"] ?? ""}
        </span>
      ),
    },
    {
      name: (
        <span title="Number and loci of genomic regions associated (mapped by inserts) with this epitope" style={{ cursor: "help" }}>
          Genomic Regions
        </span>
      ),
      selector: (row: Epitope) => row["Number of Genomic Regions"] ?? "",
      width: "150px",
      sortable: true,
      cell: (row: Epitope) => (
        <GenomicRegionsCell
          count={row["Number of Genomic Regions"] ?? ""}
          regions={row["Genomic Region Locus"] ?? []}
          onShow={() => {
            setModalGenomicRegions({
              regions: row["Genomic Region Locus"],
              igvUrl: `${igvBaseUrl}/igv-webapp/?locus=${row["Genomic Region Locus"][0]}`,
              epitopeInfo: {
                id: row.ID ?? "",
                epitope: row.Epitope ?? "",
                numberOfPeptides: row["Number of Peptides"] ?? 0,
                numberOfInserts: row["Number of Inserts"] ?? 0,
              }
            });
          }}
        />
      ),
    },
    {
      name: (
        <span title="Features annotations associated with this epitope" style={{ cursor: "help" }}>
          Annotations
        </span>
      ),
      cell: (row: Epitope) => (
        <FeaturesCell features={row.Features} onShowAll={() => setModalFeatures(row.Features)} />
      ),
      wrap: true,
    },
  ];

  return (
    <div className="container my-2 workspace" style={{ maxHeight: "80vh" }}>
      <SearchBar value={search} onChange={setSearch} />
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="epitopes-data-table" style={{ flex: 1, minHeight: 0 }}>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationPerPage={25}
          paginationRowsPerPageOptions={[25, 50, 100]}
          fixedHeader
          fixedHeaderScrollHeight="60vh"
          defaultSortFieldId={4} // Inserts column (see note below)
          defaultSortAsc={false} // Descending order
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
          epitopeInfo={modalGenomicRegions.epitopeInfo}
          onClose={() => setModalGenomicRegions(null)}
        />
      )}
    </div>
  );
}
export default Table