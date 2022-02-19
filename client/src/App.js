import "./App.css";
import Search from "./pages/Search";
import ContactForm from "./pages/ContactForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/contact/:id" element={<ContactForm />} />
          <Route path="/*" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
