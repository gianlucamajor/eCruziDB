import type { Annotation } from "../types/Annotation";

type FeaturesCellProps = {
  features: {
    Annotation: Annotation[];
  } | undefined;
  onShowAll: () => void;
};

function FeaturesCell({ features, onShowAll }: FeaturesCellProps) {
  if (!features) return null;
  const annotationSummaries = (features.Annotation ?? []).map(a => a.description);
  const allSummaries = [...annotationSummaries];
  if (allSummaries.length === 0) return null;
  const shown = allSummaries.slice(0, 1).join(", ");
  const more =
    allSummaries.length > 1 ? (
      <span
        style={{ color: "#007bff", cursor: "pointer", marginLeft: 10, textDecoration: "underline" }}
        onClick={onShowAll}
      >
        +{allSummaries.length - 1}
      </span>
    ) : allSummaries.length > 0 ? (
      <span
        style={{ color: "#007bff", cursor: "pointer", marginLeft: 10 }}
        onClick={onShowAll}
      >
        +
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