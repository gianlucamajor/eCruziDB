import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContactModal from "./ContactModal";

type Props = {
  show: boolean;
  onHide: () => void;
};

const ContactModalRoute = ({ show, onHide }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/contact" && !show) {
      onHide();
    }
  }, [location.pathname, onHide, show]);

  return (
    <ContactModal
      show={show || location.pathname === "/contact"}
      onHide={() => {
        onHide();
        navigate("/");
      }}
    />
  );
};

export default ContactModalRoute;