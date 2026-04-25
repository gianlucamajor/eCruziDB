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
import AboutModalRoute from "./components/modals/AboutModalRoute";
import DownloadModalRoute from "./components/modals/DownloadModalRoute";
import FundingModalRoute from "./components/modals/FundingModalRoute";
import TeamModalRoute from "./components/modals/TeamModalRoute";
import MetricsModalRoute from "./components/modals/MetricsModalRoute";
import ReleaseModalRoute from "./components/modals/ReleaseModalRoute";
import ContactModalRoute from "./components/modals/ContactModalRoute";
import MethodologyModalRoute from "./components/modals/MethodologyModalRoute";
import EdaModalRoute from "./components/modals/EdaModalRoute";


function App() {
  const { stepsEnabled, setStepsEnabled, steps } = useTour();
  const [showDownload, setShowDownload] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showFunding, setShowFunding] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showEda, setShowEda] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <header className="text-center py-3 bg-light">
        <h1 className="display-4 fw-bold" style={{ letterSpacing: "1px" }}>
          eCruziDB
        </h1>
        <p className="lead text-secondary mb-0">
         Epitopes identified from  <em>Trypanosoma cruzi</em> phage display data.
        </p>
        <div>
          <Router basename={import.meta.env.BASE_URL}>
            <Menu
              setStepsEnabled={setStepsEnabled}
              onAboutClick={() => setShowAbout(true)}
              onDownloadClick={() => setShowDownload(true)}
              onFundingClick={() => setShowFunding(true)}
              onTeamClick={() => setShowTeam(true)}
              onMetricsClick={() => setShowFunding(true)}
              onReleaseClick={() => setShowFunding(true)}
              onContactClick={() => setShowFunding(true)}
            
            />
            <Routes>
              <Route path="/" element={null} />
              <Route path="/about" element={null} />
              <Route path="/methodology" element={null} />
              <Route path="/eda" element={null} />
              <Route path="/downloads" element={null} />
              <Route path="/funding" element={null} />
              <Route path="/team" element={null} />
              <Route path="/release" element={null} />
              <Route path="/contact" element={null} />
            </Routes>
            <AboutModalRoute show={showAbout} onHide={() => setShowAbout(false)} />
            <MethodologyModalRoute show={showAbout} onHide={() => setShowAbout(false)} />
            <EdaModalRoute show={showEda} onHide={() => setShowEda(false)} />
            <DownloadModalRoute show={showDownload} onHide={() => setShowDownload(false)} />
            <FundingModalRoute show={showFunding} onHide={() => setShowFunding(false)} />
            <TeamModalRoute show={showTeam} onHide={() => setShowTeam(false)} />
            <MetricsModalRoute show={showFunding} onHide={() => setShowFunding(false)} />          
            <ReleaseModalRoute show={showFunding} onHide={() => setShowFunding(false)} />
            <ContactModalRoute show={showFunding} onHide={() => setShowFunding(false)} />
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
    </div>
  );
}

export default App;
