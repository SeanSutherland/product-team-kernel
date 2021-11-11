import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<NotesListPage />} />
          <Route path="/note/:noteId" element={<NotePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
