import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type TeamModalProps = {
  show: boolean;
  onHide: () => void;
};

const TeamModal = ({ show, onHide }: TeamModalProps) => (
  <Modal show={show} onHide={onHide} centered size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Team</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ul>
        <li>Gianluca Major Machado da Silva</li>
        <li>Francislon Silva</li>
        <li>Carlos Morais</li>
        <li>Ricardo Giordano</li>
        <li>João Carlos Setubal</li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default TeamModal;