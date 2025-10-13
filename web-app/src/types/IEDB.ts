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

export type tcIEDB = IEDB;
export type HumanIEDB = IEDB;