import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
        </Routes>
        <Nav></Nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
