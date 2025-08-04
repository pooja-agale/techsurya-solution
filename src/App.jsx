import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sequence from "./Compo/Sequence";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sequence />} />
      </Routes>
    </Router>
  );
}

export default App;
