import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EdaModal from "./EdaModal";

type EdaModalRouteProps = {
  show: boolean;
  onHide: () => void;
};

const EdaModalRoute = ({ show, onHide }: EdaModalRouteProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/eda" && !show) {
      onHide();
    }
  }, [location.pathname, onHide, show]);

  return (
    <EdaModal
      show={show || location.pathname === "/eda"}
      onHide={() => {
        onHide();
        navigate("/");
      }}
    />
  );
};

export default EdaModalRoute;
