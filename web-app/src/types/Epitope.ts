import type { Annotation } from "./Annotation";
import type { ProteinBestHit } from "./ProteinBestHit";
import type { tcIEDB, HumanIEDB } from "./IEDB";

export interface Epitope {
  ID: string;
  "Number of Genomic Regions": number;
  "Number of Peptides": number;
  "Number of Inserts": number;
  Epitope: string;
  MSA: string;
  "Genomic Region Locus": string[];
  Features: {
    GenomicRegionsAnnotation: Annotation[];
    ProteinBestHit?: ProteinBestHit;
    TCruziIEDB?: tcIEDB[];
    HumanIEDB?: HumanIEDB[];
  };
}