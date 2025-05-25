import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({ id, title, body, createdAt, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
      <div className="note-item__action">
        <button className="action-button" onClick={() => onDelete(id)}>
          🗑️
        </button>
        <button className="action-button" onClick={() => onArchive(id)}>
          🗃️
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
