import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Table from "./components/Table";
import "intro.js/introjs.css";
import { Steps } from "intro.js-react";
import { useTour } from "./hooks/useTour";

function App() {
  const { stepsEnabled, setStepsEnabled, steps } = useTour();

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <header className="text-center py-4 bg-light">
        <h1 className="display-4 fw-bold" style={{ letterSpacing: "1px" }}>
          T.cruzi Epitopes Database
        </h1>
        <p className="lead text-secondary mb-0">
          Epitopes identified from phage display assay.
        </p>
        <button
          className="btn btn-primary mt-3"
          onClick={() => setStepsEnabled(true)}
        >
          Start Tour
        </button>
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

export default App
