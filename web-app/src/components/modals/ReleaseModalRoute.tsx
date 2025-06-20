import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReleaseModal from "./ReleaseModal";

type Props = {
  show: boolean;
  onHide: () => void;
};

const ReleaseModalRoute = ({ show, onHide }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/release" && !show) {
      onHide();
    }
  }, [location.pathname, onHide, show]);

  return (
    <ReleaseModal
      show={show || location.pathname === "/release"}
      onHide={() => {
        onHide();
        navigate("/");
      }}
    />
  );
};

export default ReleaseModalRoute;