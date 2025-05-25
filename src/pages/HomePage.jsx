import React, { useEffect, useState } from "react";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/local-data";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

function HomePage() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setNotes(getActiveNotes());
  }, []);

  const onDelete = (id) => {
    deleteNote(id);
    setNotes(getActiveNotes());
  };

  const onArchive = (id) => {
    archiveNote(id);
    setNotes(getActiveNotes());
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="homepage container">
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <NoteList
        notes={filteredNotes}
        onDelete={onDelete}
        onArchive={onArchive}
        emptyMessage="Tidak ada catatan."
      />

      <div className="homepage__action">
        <Link to="/notes/new">
          <button className="action">＋</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
