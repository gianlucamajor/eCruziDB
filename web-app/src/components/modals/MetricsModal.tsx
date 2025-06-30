import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type MetricsModalProps = {
  show: boolean;
  onHide: () => void;
};

const MetricsModal = ({ show, onHide }: MetricsModalProps) => (
  <Modal show={show} onHide={onHide} centered size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Metrics</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Here you can find statistics and metrics about the T.cruzi Epitopes Database, such as the number of epitopes, peptides, and inserts.
      </p>
      <p>
        For detailed metrics, please contact the project team or visit our documentation.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default MetricsModal;