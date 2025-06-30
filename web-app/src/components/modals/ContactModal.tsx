import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type ContactModalProps = {
  show: boolean;
  onHide: () => void;
};

const ContactModal = ({ show, onHide }: ContactModalProps) => (
  <Modal show={show} onHide={onHide} centered size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Contact</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        For questions, help, feedback, or collaboration inquiries, please contact the eCruziDB team.
      </p>
    <p>
      Email:{" "}
      <a href="mailto:gianlucamajor@usp.br?subject=eCruziDB">
        gianlucamajor@usp.br
      </a>
    </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ContactModal;