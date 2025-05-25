import React, { useEffect, useState } from "react";
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from "../utils/local-data";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

function ArchivePage() {
  const [notes, setNotes] = useState(getArchivedNotes());
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setNotes(getArchivedNotes());
  }, []);

  const onDelete = (id) => {
    deleteNote(id);
    setNotes(getArchivedNotes());
  };

  const onUnarchive = (id) => {
    unarchiveNote(id);
    setNotes(getArchivedNotes());
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="archive-page container">
      <h2>Catatan Arsip</h2>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <NoteList
        notes={filteredNotes}
        onDelete={onDelete}
        onArchive={onUnarchive}
        emptyMessage="Arsip kosong."
      />
    </div>
  );
}

export default ArchivePage;
