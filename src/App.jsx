import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Read from "./components/Read";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/read" element={<Read />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/" element={<Create />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
