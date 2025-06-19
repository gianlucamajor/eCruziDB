import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type AboutModalProps = {
  show: boolean;
  onHide: () => void;
};

const AboutModal = ({ show, onHide }: AboutModalProps) => (
  <Modal show={show} onHide={onHide} centered size="xl">
    <Modal.Header closeButton>
      <Modal.Title>About eCruziDB</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        The World Health Organization (WHO) estimates that more than 7 million people are infected with Trypanosoma cruzi (T. cruzi), the parasite responsible for Chagas disease, most of whom live in underdeveloped countries in Latin America. Chagas disease is entirely curable when detected at an early stage. However, without diagnosis and treatment during the acute phase, the disease progresses to a chronic stage, and approximately 30% of chronically infected individuals develop cardiac complications, while 1 in 10 develop digestive, neurological, or a combination of these complications. It is estimated that Chagas disease causes more than 10,000 deaths annually.
      </p>
      <p>
        In this database, we present more than 7,000 T. cruzi epitopes identified through Phage Display (PD) data obtained from interactions with antibodies of patients infected with T. cruzi at different stages of Chagas disease. Unlike other databases that also contain T. cruzi epitopes, such as the IEDB, in addition to providing the epitope sequence, we also present the set of peptides that reacted with patient antibodies and share the same epitope. Furthermore, we include the DNA inserts that encode each peptide, which allows us to identify and display the genomic regions and their respective functions that have the potential to encode each of the presented epitopes.
      </p>
      <p>
        Our database serves as an epitope browser, enabling users to search for specific epitope sequences, find other peptides sharing the same epitope that also react with antibodies from Chagas disease patients, and explore the T. cruzi genomic regions potentially encoding these epitopes. The T. cruzi genome is known for its highly repetitive nature and large protein families. Therefore, being able to navigate the genomic regions associated with each epitope is particularly useful. We believe that this T. cruzi epitope database will be a valuable resource for the research community, helping to clarify the molecular mechanisms of Chagas disease and ultimately contributing to the development of new diagnostic methods and treatments.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AboutModal;