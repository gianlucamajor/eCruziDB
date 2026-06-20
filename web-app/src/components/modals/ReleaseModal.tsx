import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

type ReleaseNote = {
  version: string;
  date: string;
  summary: string;
  features: string[];
  sourceOfData?: string;
};


const releaseNotes: ReleaseNote[] = [
  {
    version: "1.5.0",
    date: "2026-06-20",
    summary: "Minor improvements and epitopes-data update.",
    features: [
      "Update epitopes-data.json",
      "Add new AGRs EDA",
      "fix EDA links",
    ],
    sourceOfData: "epitopes-data.json (md5: e4de1b41f054cc1dce8cb1baf345d5c6) generated from epitopes list reported on 2025-09-25/RE-23-02-26 by epitope_reporter from Epizap:v0.6.0."
  },
    {
    version: "1.4.0",
    date: "2025-17-13",
    summary: "Minor improvements",
    features: [
      "Show number of insets by group of patients",
      "Show details of best hit T. cruzi proteome",
      
    ],
    sourceOfData: "epitopes-data.json (md5: 5a0b607f07948fc22704fdaa1734a076) generated from epitopes list reported on 2025-09-25 by epitope_reporter from Epizap:v0.6.0."
  },
  {
    version: "1.3.0",
    date: "2025-10-13",
    summary: "Minor improvements",
    features: [
      "Show T. cruzi proteome info as description on annotation",
      "Show Human IEDB epitope hits",
    ],
    sourceOfData: "epitopes-data.json (md5: b39536ac321017a5e9c8b93c839a43a0) generated on 2025-09-25 by Epizap:v0.5.0-alpha."
  },
  {
    version: "1.2.0",
    date: "2025-09-17",
    summary: "Minor improvements",
    features: [
      "Show T.cruzi IEDB epitope hits",
    ],
    sourceOfData: "epitopes-data.json (md5: 8f2e3c4f7e1b6c3a9d4e5f6a7b8c9d0e) generated on 2025-06-05 by Epizap:v0.4.0-alpha."
  },
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
            <p>Data source: {selectedNote.sourceOfData}</p>
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