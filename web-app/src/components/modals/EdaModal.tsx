import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import type { EDA } from "../../types/EDA";
import "./EdaModal.css";

type EdaModalProps = {
  show: boolean;
  onHide: () => void;
};

const EdaModal = ({ show, onHide }: EdaModalProps) => {
  const [edas, setEdas] = useState<EDA[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (show) {
      const loadEdas = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.BASE_URL}data/edas-data.json`
          );
          if (!response.ok) {
            throw new Error("Failed to load EDA data");
          }
          const data: EDA[] = await response.json();
          setEdas(data);
          setError(null);
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Failed to load EDA data"
          );
        } finally {
          setLoading(false);
        }
      };

      loadEdas();
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide} centered size="xl">
      <Modal.Header closeButton>
        <Modal.Title>eCruziDB - Extended Data Analysis </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ paddingLeft: "2em", paddingRight: "2em", justifyContent: "justify", textAlign: "justify", marginBottom: "1.5em" }}>
          <p>
            Explore the extensibility of eCruziDB through our Extended Data Analysis (EDA) modules. Hosted on Google Colab, these interactive notebooks provide hands-on examples of downstream analyses using our dataset, including:
          </p>
        </div>
        {loading && <div className="text-center py-4">Loading EDAs...</div>}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        {!loading && !error && (
          <Container fluid className="eda-gallery">
            <Row className="g-4">
              {edas.map((eda) => (
                <Col
                  key={eda.id}
                  xs={12}
                  sm={6}
                  lg={4}
                  className="d-flex"
                >
                  <div className="card w-100 eda-card">
                    <img
                      src={`${import.meta.env.BASE_URL}${eda.imagePath}`}
                      className="card-img-top eda-image"
                      alt={eda.title}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{eda.title}</h5>
                      <p className="card-text">{eda.description}</p>
                      <a
                        href={eda.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm mt-auto"
                      >
                        {eda.linkText}
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
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

export default EdaModal;
