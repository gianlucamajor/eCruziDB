import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MethodologyModal from "./MethodologyModal";

type MethodologyModalRouteProps = {
  show: boolean;
  onHide: () => void;
};

const MethodologyModalRoute = ({ show, onHide }: MethodologyModalRouteProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/methodology" && !show) {
      onHide();
    }
  }, [location.pathname, onHide, show]);

  return (
    <MethodologyModal
      show={show || location.pathname === "/methodology"}
      onHide={() => {
        onHide();
        navigate("/");
      }}
    />
  );
};

export default MethodologyModalRoute;