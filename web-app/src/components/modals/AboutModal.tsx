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
        The <a href={import.meta.env.BASE_URL} target="_blank" rel="noopener noreferrer">eCruziDB</a> database contains more than 7,000 Trypanosoma cruzi epitopes obtained from NGS Phage Display (PD) data derived from interactions with antibodies of patients infected with T. cruzi at different stages of Chagas disease. These data were described in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8185243/" target="_blank" rel="noopener noreferrer">Teixeira et al. (2021)</a>.
      </p>
      <p>
        eCruziDB allows a range of epitope browsing functions: search for specific epitope sequences, find other peptides sharing the same epitope, and explore the T. cruzi genomic regions potentially encoding these epitopes. The T. cruzi genome is known for its highly repetitive nature and large protein families. Therefore, being able to navigate the genomic regions associated with each epitope is particularly useful. Users can download all epitopes, along with the peptides used for their identification and the corresponding DNA inserts that encode them.
      </p>
      <p>
        T. cruzi is the causative agent of Chagas Disease, which is a Neglected Tropical Disease. The World Health Organization (<a href="https://www.who.int/news-room/fact-sheets/detail/chagas-disease-(american-trypanosomiasis)" target="_blank" rel="noopener noreferrer">WHO</a>) estimates that more than 7 million people are infected with T. cruzi, the vast majority living in Latin America. Chagas disease is entirely curable when detected at an early stage. However, without diagnosis and treatment during the acute phase, the disease progresses to a chronic stage, and approximately 30% of chronically infected individuals develop cardiac complications, while one in 10 develop digestive or neurological complications, or a combination of both. It is estimated that Chagas disease causes more than 10,000 deaths annually.
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