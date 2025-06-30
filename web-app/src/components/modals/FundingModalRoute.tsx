import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FundingModal from "./FundingModal";

type Props = {
  show: boolean;
  onHide: () => void;
};

const FundingModalRoute = ({ show, onHide }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/funding" && !show) {
      onHide();
    }
  }, [location.pathname, onHide, show]);

  return (
    <FundingModal
      show={show || location.pathname === "/funding"}
      onHide={() => {
        onHide();
        navigate("/");
      }}
    />
  );
};

export default FundingModalRoute;