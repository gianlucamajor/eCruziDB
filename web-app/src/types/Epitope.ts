import type { Annotation } from "./Annotation";
import type { tcIEDB } from "./IEDB";

export interface Epitope {
  ID: string;
  "Number of Genomic Regions": number;
  "Number of Peptides": number;
  "Number of Inserts": number;
  Epitope: string;
  MSA: string;
  "Genomic Region Locus": string[];
  Features: {
    Annotation: Annotation[];
    tcIEDB: tcIEDB[];
  };
}