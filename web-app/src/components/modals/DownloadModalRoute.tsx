import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DownloadModal from "./DownloadModal";

type Props = {
  show: boolean;
  onHide: () => void;
};

function DownloadModalRoute({ show, onHide }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/downloads" && !show) {
      onHide();
    }
  }, [location.pathname]);

  return (
    <DownloadModal
      show={show || location.pathname === "/downloads"}
      onHide={() => {
        onHide();
        navigate("/");
      }}
    />
  );
}
export default DownloadModalRoute;