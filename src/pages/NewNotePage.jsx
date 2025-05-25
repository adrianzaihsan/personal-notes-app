import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function NewNotePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNote({ title, body, archived: false });
    navigate("/");
  };

  return (
    <div className="add-new-page">
      <h2>Buat Catatan Baru</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="add-new-page__input">
          <input
            type="text"
            className="add-new-page__input__title"
            placeholder="Isi Judul Disini"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div
            className="add-new-page__input__body"
            contentEditable
            data-placeholder="Isi Catatan Disini"
            onInput={(e) => setBody(e.currentTarget.innerHTML)}
          />
        </div>

        <div className="add-new-page__action">
          <button type="submit" className="action" title="Simpan">
            ✔
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewNotePage;
