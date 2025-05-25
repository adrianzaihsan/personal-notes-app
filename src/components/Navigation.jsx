import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="navigation">
      <div className="logo-title">
        <img src="/images/vite.svg" alt="Logo" className="app-logo" />
      </div>
      <h1>Aplikasi Catatan</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/archives">Arsip</Link>
          </li>
          <li>
            <Link to="/notes/new">Tambah</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
