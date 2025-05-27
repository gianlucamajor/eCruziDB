export interface Epitope {
  ID: string;
  "Number of Genomic Regions": number;
  "Number of Peptides": number;
  "Number of Inserts": number;
  Epitope: string;
  MSA: string;
  "Genomic Region Locus": string[];
  Features: any[]; // You can replace 'any' with a more specific type if you know the structure
}