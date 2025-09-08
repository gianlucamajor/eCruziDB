import type { Annotation } from "./Annotation";

export interface IEDB {
  IEDB_id: string;
  sequence: string;
  qstart: string;
  qend: string;
  sstart: string;
  send: string;
  source_molecule: string;
  source_molecule_IRI: string;
}

export interface Epitope {
  ID: string;
  "Number of Genomic Regions": number;
  "Number of Peptides": number;
  "Number of Inserts": number;
  Epitope: string;
  MSA: string;
  "Genomic Region Locus": string[];
  Features: {
    Annotation: Annotation[]; // Use external type here
    IEDB: IEDB[];
  };
}