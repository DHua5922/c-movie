import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer";
import MoviesPage from "./pages/MovieSearchPage";

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
