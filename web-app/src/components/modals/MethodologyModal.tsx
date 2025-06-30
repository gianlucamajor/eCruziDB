import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type MethodologyModalProps = {
  show: boolean;
  onHide: () => void;
};

const MethodologyModal = ({ show, onHide }: MethodologyModalProps) => (
  <Modal show={show} onHide={onHide} centered size="xl">
    <Modal.Header closeButton>
      <Modal.Title>eCruziDB Methodology</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div style={{ paddingLeft: "2em", paddingRight: "2em", justifyContent: "justify", textAlign: "justify" }}>
      <p>
        The epitopes in eCruziDB were obtained from gPhage data derived from the interactions between T. cruzi peptides and antibodies of patients infected with T. cruzi at different stages of Chagas disease. These data, roughly 5.5 million reads, were described in <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8185243/" target="_blank" rel="noopener noreferrer">Teixeira et al. (2021)</a>. The DNA fragments encoding captured peptides were sequenced and then translated, giving rise to two datasets: DNA fragment sequences (inserts) and peptide sequences.
      </p>
      <p>
        To ensure that all DNA fragments correspond to actual T. cruzi sequences, the fragments were filtered to retain only those with at least two identical copies. These were then compared against T. cruzi genomes, and only sequences exhibiting a minimum of 90% nucleotide similarity were retained for further processing. In the next step, the DNA sequence in-frame is translated giving rise to a peptide sequence, and then it is compared with T. cruzi proteomes. Only peptide sequences having at least 60% similarity are kept for further processing. 
      </p>
      <p>
        The inserts were mapped to the T. cruzi genome, specifically to the <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_015033625.1/" target="blank" rel="noopener noreferrer"> Brazil A4 (Br-A4) strain</a>. The mapping process resulted in the identification of 22,979 genomic regions with the potential to encode epitope-containing peptides. Additionally, based on the available Br-A4 genome annotations, information regarding the genes and their associated functions was retrieved for each epitope.
      </p>
      <p>
        T. cruzi has a relatively large number of multigene families, which means that a given insert may align to multiple genomic regions. To address this issue, all mapped regions were analyzed and grouped whenever they shared 100% identical inserts. As a result, 4,370 groups were identified as single-peptide region groups, mapped by two or more inserts encoding the same peptide. Additionally, 2,932 groups of multi-peptide regions were identified, mapped by inserts that, although encoding peptides with slight sequence differences, share a common core.
      </p>
      <p>
        For the first group, single-peptide groups, epitope identification was straightforward: the single peptide within each group was considered the epitope, resulting in 4,370 epitopes. In the case of multi-peptide groups, a multiple sequence alignment (MSA) was performed for all peptides within each group to identify the shared core. From each consensus sequence, epitopes were defined as continuous sequences of at least 8 amino acids in length. In some cases, this process yielded more than one epitope per consensus, since the consensus sequence was not always continuous. Ultimately, 3,440 epitopes were identified from the 2,932 multi-peptide groups. 
      </p>
      <p>
        The final eCruziDB dataset comprises 7,810 epitopes. Each epitope is associated with at least one genomic region. For core-derived epitopes identified via MSA, the alignment and corresponding peptides are also provided.
      </p>
      <h5 style={{ marginTop: "2em" }}>List of <i>T. cruzi</i> genomes used to filter DNA fragments:</h5>
      <ul>
        <li>
          Sylvio X10/1 | <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_000188675.2/" target="_blank" rel="noopener noreferrer">Tc_SX10_v2.0</a>
        </li>
        <li>
          Bug2148 | <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_002749415.1/" target="_blank" rel="noopener noreferrer">ASM274941v1</a>
        </li>
        <li>
          TCC | <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_003177095.1/" target="_blank" rel="noopener noreferrer">TCC_diploid_1.0</a>
        </li>
        <li>
          Dm28c | <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_003177105.1/" target="_blank" rel="noopener noreferrer">ASM317710v1</a>
        </li>
        <li>
          Y | <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_003594645.1/" target="_blank" rel="noopener noreferrer">ASM359464v1</a>
        </li>
        <li>
          Berenice | <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_013358655.1/" target="_blank" rel="noopener noreferrer">ASM1335865v1</a>
        </li>
        <li>
          231 | <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCA_900252365.1/" target="_blank" rel="noopener noreferrer">TcIII_231rod</a>
        </li>
        <li>
          CL Brener | <a href="https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000209065.1/" target="_blank" rel="noopener noreferrer">ASM20906v1</a>
        </li>
      </ul>
    </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default MethodologyModal;