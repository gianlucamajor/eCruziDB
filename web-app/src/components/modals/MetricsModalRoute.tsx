import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MetricsModal from "./MetricsModal";

type Props = {
  show: boolean;
  onHide: () => void;
};

const MetricsModalRoute = ({ show, onHide }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/metrics" && !show) {
      onHide();
    }
  }, [location.pathname, onHide, show]);

  return (
    <MetricsModal
      show={show || location.pathname === "/metrics"}
      onHide={() => {
        onHide();
        navigate("/");
      }}
    />
  );
};

export default MetricsModalRoute;