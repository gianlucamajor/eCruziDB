type PeptidesCellProps = {
  value: number;
  id: string;
  onShow: (htmlFile: string) => void;
};

function PeptidesCell({ value, id, onShow }: PeptidesCellProps) {
  return (
    <span>
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
          <svg width="16" height="16" fill="currentColor" style={{ verticalAlign: "middle" }} viewBox="0 0 16 16">
            <path d="M6.354 5.5H4a2.5 2.5 0 0 0 0 5h2.354a.5.5 0 0 1 0 1H4a3.5 3.5 0 0 1 0-7h2.354a.5.5 0 0 1 0 1z"/>
            <path d="M9.646 10.5H12a2.5 2.5 0 0 0 0-5H9.646a.5.5 0 0 1 0-1H12a3.5 3.5 0 0 1 0 7H9.646a.5.5 0 0 1 0-1z"/>
            <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 5.5 8z"/>
          </svg>
        </span>
      )}
    </span>
  );
}

export default PeptidesCell;
