import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type FundingModalProps = {
  show: boolean;
  onHide: () => void;
};

const FundingModal = ({ show, onHide }: FundingModalProps) => (
  <Modal show={show} onHide={onHide} centered size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Funding</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <img
                src="img/capes-cnpq.png"
                alt="CAPES and CNPq logos"
                style={{ maxWidth: "400px", width: "100%", height: "auto" }}
            />
        </div>
        <p>
            This project is funded by the {" "}
            <a href="https://www.capes.gov.br/" target="_blank">CAPES</a> 
            {" "} and {" "}
            <a href="https://www.cnpq.br/" target="_blank">CNPq</a>
        </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default FundingModal;