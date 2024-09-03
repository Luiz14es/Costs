import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/pages/layout/Container";
import NavBar from "./components/pages/layout/Navbar";
import Footer from "./components/pages/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />

      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newProject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
