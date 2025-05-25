import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container not-found-page">
      <h2>404</h2>
      <p>Halaman tidak ditemukan 😢</p>
      <Link to="/" className="back-home-link">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFoundPage;
