import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import parser from "html-react-parser";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
import { showFormattedDate } from "../utils";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <p className="not-found">Catatan tidak ditemukan</p>;
  }

  const onDelete = () => {
    deleteNote(id);
    navigate("/");
  };

  const onArchiveToggle = () => {
    if (note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    navigate("/");
  };

  return (
    <div className="detail-page container">
      <h2>{note.title}</h2>
      <p className="note-date">{showFormattedDate(note.createdAt)}</p>
      <div className="note-body">{parser(note.body)}</div>
      <div className="detail-page__action">
        <button className="btn-delete" onClick={onDelete}>
          Hapus
        </button>
        <button className="btn-archive" onClick={onArchiveToggle}>
          {note.archived ? "Batal Arsip" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
}

export default DetailPage;
