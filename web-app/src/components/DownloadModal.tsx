import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type DownloadModalProps = {
  show: boolean;
  onHide: () => void;
};

const files = [
  {
    name: "epitopes-db.fasta",
    description: "List all T.cruzi epitope sequences in FASTA format",
    size: "335K",
    path: "data/epitopes-db.fasta",
  },
{
    name: "t-cruzi-all-peptides.fasta",
    description: "List all T.cruzi peptide sequences in FASTA format",
    size: "3.5M",
    path: "data/t-cruzi-all-peptides.fasta",
  },
  {
    name: "all-inserts.fastq",
    description: "All phage display inserts (nucleotides) in FASTQ format",
    size: "546M",
    path: "data/all-inserts-ms-mapped-BrA4.fastq",
  },
];

const DownloadModal = ({ show, onHide }: DownloadModalProps) => (
  <Modal show={show} onHide={onHide} centered size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Downloads</Modal.Title>
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