import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import HomePage from "./components/HomePage";
import ExperiencePage from "./components/ExperiencePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="experience" element={<ExperiencePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
