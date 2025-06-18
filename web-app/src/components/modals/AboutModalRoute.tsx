import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AboutModal from "./AboutModal";

type Props = {
  show: boolean;
  onHide: () => void;
};

const AboutModalRoute = ({ show, onHide }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/about" && !show) {
      onHide();
    }
  }, [location.pathname, onHide, show]);

  return (
    <AboutModal
      show={show || location.pathname === "/about"}
      onHide={() => {
        onHide();
        navigate("/");
      }}
    />
  );
};

export default AboutModalRoute;