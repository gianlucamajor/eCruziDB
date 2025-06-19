import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type DownloadModalProps = {
  show: boolean;
  onHide: () => void;
};

const files = [
  {
    name: "epitopes-db.fasta.zip",
    description: "List all epitope sequences in FASTA format",
    size: "185K",
    path: "data/epitopes-db.fasta.zip",
  },
{
    name: "t-cruzi-all-peptides.fasta.zip",
    description: "List all peptide sequences in FASTA format",
    size: "1020K",
    path: "data/t-cruzi-all-peptides.fasta.zip",
  },
  {
    name: "all-inserts-ms-mapped-BrA4.fastq.zip",
    description: "All phage display inserts (nucleotides) in FASTQ format",
    size: "34M",
    path: "data/all-inserts-ms-mapped-BrA4.fastq.zip",
  },
];

const DownloadModal = ({ show, onHide }: DownloadModalProps) => (
  <Modal show={show} onHide={onHide} centered size="xl">
    <Modal.Header closeButton>
      <Modal.Title>eCruziDB Downloads</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <table className="table table-bordered mb-0">
        <thead>
          <tr>
            <th>File</th>
            <th>Description</th>
            <th>Size</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.name}>
              <td>{file.name}</td>
              <td>{file.description}</td>
              <td>{file.size}</td>
              <td>
                <a
                  href={file.path}
                  download
                  className="btn btn-primary btn-sm"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DownloadModal;