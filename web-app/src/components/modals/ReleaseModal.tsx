import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type ReleaseModalProps = {
  show: boolean;
  onHide: () => void;
};

const ReleaseModal = ({ show, onHide }: ReleaseModalProps) => (
  <Modal show={show} onHide={onHide} centered size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Release</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        This section contains information about the current and previous releases of the T.cruzi Epitopes Database.
      </p>
      <p>
        For release notes and version history, please refer to our documentation or contact the team.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ReleaseModal;