import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Table from "./components/Table";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <header className="text-center py-4 bg-light">
        <h1 className="display-4 fw-bold" style={{ letterSpacing: "1px" }}>
          T.cruzi Epitopes Database
        </h1>
        <p className="lead text-secondary mb-0">
          Epitopes identified on sequence from the phage display assay.
        </p>
      </header>
      <div style={{ height: "calc(100vh - 110px)", overflow: "auto" }}>
        <Table />
      </div>
    </div>
  );
}

export default App
