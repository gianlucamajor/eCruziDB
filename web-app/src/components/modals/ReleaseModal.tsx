import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type ReleaseNote = {
  version: string;
  date: string;
  summary: string;
  features: string[];
};

const releaseNotes: ReleaseNote[] = [
  {
    version: "1.1.1",
    date: "2025-06-23",
    summary: "Minor improvements and bug fixes.",
    features: [
      "Show epitope and their information in Genomic Regions",
      "Fixed position of close button in Genomic Regions"
    ],
  },
  {
    version: "1.0.0",
    date: "2025-06-05",
    summary: "First version of eCruziDB.",
    features: [
      "Search by epitope sequence",
      "Search by annotation values",
      "Show Multiple Sequence Alignment (MSA) for epitopes",
      "Show Genomic Regions for epitopes",
      "Show epitope annotations",
      "Show epitope sequences",
      "Guided tour (Start Tour)",
      "About page",
      "Methodology page",
      "Downloads page",
      "Team page",
      "Funding page",
      "Release notes page",
      "Contact page"
    ],
  },
  // Add new releases here
];

type ReleaseModalProps = {
  show: boolean;
  onHide: () => void;
};

const ReleaseModal = ({ show, onHide }: ReleaseModalProps) => {
  // Default to latest (first in array)
  const [selectedVersion, setSelectedVersion] = useState(releaseNotes[0].version);

  const selectedNote = releaseNotes.find(note => note.version === selectedVersion);

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Release Notes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This section contains information about the current and previous releases of the T.cruzi Epitopes Database.
        </p>
        <Form.Group className="mb-3" controlId="releaseVersionSelect">
          <Form.Label>Select version</Form.Label>
          <Form.Select
            value={selectedVersion}
            onChange={e => setSelectedVersion(e.target.value)}
          >
            {releaseNotes.map(note => (
              <option key={note.version} value={note.version}>
                {note.version} ({note.date})
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        {selectedNote && (
          <div>
            <h5>
              Version {selectedNote.version} <small>({selectedNote.date})</small>
            </h5>
            <p>{selectedNote.summary}</p>
            <ul>
              {selectedNote.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReleaseModal;