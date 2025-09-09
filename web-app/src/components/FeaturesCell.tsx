import type { Annotation } from "../types/Annotation";
import type { tcIEDB } from "../types/IEDB";

type FeaturesCellProps = {
  features: {
    Annotation: Annotation[];
    tcIEDB?: tcIEDB[];
  } | undefined;
  onShowAll: () => void;
};

function FeaturesCell({ features, onShowAll }: FeaturesCellProps) {
  if (!features) return null;
  const genomicRegionsAnnotation = (features.Annotation ?? []).map(a => a.description);
  const tcEptIEDBCount = features.tcIEDB?.length ?? 0;
  if (genomicRegionsAnnotation.length === 0 && tcEptIEDBCount === 0) return null;
  const shown = genomicRegionsAnnotation.slice(0, 1).join(", ");
  const more =
    genomicRegionsAnnotation.length > 1 ? (
      <span
        style={{ color: "#007bff", cursor: "pointer", marginLeft: 10, textDecoration: "underline" }}
        onClick={onShowAll}
      >
        +{genomicRegionsAnnotation.length - 1}
      </span>
    ) : genomicRegionsAnnotation.length > 0 ? (
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
      {tcEptIEDBCount > 0 && (
        <span style={{ marginLeft: 10, color: "#28a745" }}>
          | {tcEptIEDBCount} Tc. IEDB
        </span>
      )}
    </span>
  );
}

export default FeaturesCell;