import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TeamModal from "./TeamModal";

type Props = {
  show: boolean;
  onHide: () => void;
};

const TeamModalRoute = ({ show, onHide }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/team" && !show) {
      onHide();
    }
  }, [location.pathname, onHide, show]);

  return (
    <TeamModal
      show={show || location.pathname === "/team"}
      onHide={() => {
        onHide();
        navigate("/");
      }}
    />
  );
};

export default TeamModalRoute;