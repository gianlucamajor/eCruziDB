
type FeaturesCellProps = {
  features: string[] | undefined;
  onShowAll: () => void;
};

function FeaturesCell({ features, onShowAll }: FeaturesCellProps) {
  if (!features || features.length === 0) return null;
  const shown = features.slice(0, 2).join(", ");
  const more =
    features.length > 2 ? (
      <span
        style={{ color: "#007bff", cursor: "pointer", marginLeft: 10, textDecoration: "underline" }}
        onClick={onShowAll}
      >
        ...and {features.length - 2} more
      </span>
    ) : null;
  return (
    <span style={{ whiteSpace: "normal" }}>
      {shown}
      {more}
    </span>
  );
}

export default FeaturesCell;