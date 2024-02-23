import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import ArtistsList from "./Components/ArtistsList";
import ArtistPage from "./Components/ArtistPage";
import AlbumPage from "./Components/AlbumPage";
import artists from "./data/db";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ArtistsList artists={artists} />} />
        <Route path="/artist/:id" element={<ArtistPage artists={artists} />} />
        <Route
          path="/artist/:id/:albumId"
          element={<AlbumPage artists={artists} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
