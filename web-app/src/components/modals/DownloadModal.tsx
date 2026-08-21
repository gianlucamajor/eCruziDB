import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type DownloadModalProps = {
  show: boolean;
  onHide: () => void;
};

const files = [
  {
    name: "epitopes-data.json",
    description: "List all epitopes and metadata in json format",
    md5hash: "01f46316c851c27327f016937d23c489",
    path: "data/epitopes-data.json",
  },
  {
    name: "epitopes-data.fasta.zip",
    description: "List all epitope sequences in FASTA format",
    md5hash: "82e06ac41381fe6d6f3dbeea5459e29b",
    path: "data/epitopes-data.fasta.zip",
  },
{
    name: "t-cruzi-all-peptides.fasta.zip",
    description: "List all peptide sequences in FASTA format",
    md5hash: "4fa9e1a3d5262c1e7f65298e68ce9251",
    path: "data/t-cruzi-all-peptides.fasta.zip",
  },
  {
    name: "all-inserts-ms-mapped-BrA4.fastq.zip",
    description: "All phage display inserts (nucleotides) in FASTQ format",
    md5hash: "35de9340f8da1cc472dbccb568c56120",
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
            <th>md5hash</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.name}>
              <td>{file.name}</td>
              <td>{file.description}</td>
              <td>{file.md5hash}</td>
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