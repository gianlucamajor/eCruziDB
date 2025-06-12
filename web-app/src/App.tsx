import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Table from "./components/Table";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import "intro.js/introjs.css";
import { Steps } from "intro.js-react";
import { useTour } from "./hooks/useTour";
import DownloadModal from "./components/DownloadModal";


function App() {
  const { stepsEnabled, setStepsEnabled, steps } = useTour();
  const [showDownload, setShowDownload] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <header className="text-center py-3 bg-light">
        <h1 className="display-4 fw-bold" style={{ letterSpacing: "1px" }}>
          T.cruzi Epitopes Database
        </h1>
        <p className="lead text-secondary mb-0">
          Epitopes identified from phage display assay.
        </p>
        
        <div>
        <Router basename={import.meta.env.BASE_URL}>
          <Menu setStepsEnabled={setStepsEnabled} onDownloadClick={() => setShowDownload(true)} />
            <Routes>
            <Route path="/" element={null} />
            <Route path="/about" element={null} />
            </Routes>
      </Router>
      </div>
      </header>
      
      <div style={{ height: "calc(100vh - 110px)", overflow: "auto" }}>
        <Table />
      </div>
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={0}
        onExit={() => setStepsEnabled(false)}
      />

      <DownloadModal show={showDownload} onHide={() => setShowDownload(false)} />
    </div>
  );
}

export default App
