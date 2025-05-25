import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import NewNotePage from "./pages/NewNotePage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/new" element={<NewNotePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
