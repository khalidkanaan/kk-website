import { Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import HomePage from "./components/HomePage";
import ExperiencePage from "./components/ExperiencePage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="experience" element={<ExperiencePage />} />
          {/* Todo: replace element placeholder with actual component when it's created */}
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ExperiencePage />} />
          <Route path="education" element={<ExperiencePage />} />
      </Routes>
    </div>
  );
}

export default App;
