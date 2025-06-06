type PeptidesCellProps = {
  value: number;
  id: string;
  onShow: (htmlFile: string) => void;
};

function PeptidesCell({ value, id, onShow }: PeptidesCellProps) {
  return (
    
    <span className="peptides-col-cell" style={{ display: "block", width: "100%" }}>
      {value}
      {value > 1 && (
        <span
          style={{ marginLeft: 8, cursor: "pointer", color: "#007bff" }}
          title="View peptides"
          onClick={e => {
            e.stopPropagation();
            onShow(`/mview/${id}`);
          }}
        >
          {/* Simple icon (🔗) or use a library icon */}
            <span style={{ fontSize: 14, verticalAlign: "middle" }} role="img" aria-label="link">🔗</span>
        </span>
      )}
    </span>
  );
}

export default PeptidesCell;
