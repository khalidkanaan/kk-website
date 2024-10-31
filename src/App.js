import { Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import Header from "./components/Header"
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
