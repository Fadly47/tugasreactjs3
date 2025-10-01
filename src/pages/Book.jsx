import { useState } from "react";
import booksData from "../utils/books";

export default function Book() {
  const [books, setBooks] = useState(booksData);
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addBook = () => {
    if (!form.title || !form.author) {
      alert("Judul dan penulis wajib diisi!");
      return;
    }

    const newBook = {
      id: books.length + 1,
      title: form.title,
      author: form.author,
      year: form.year || new Date().getFullYear(),
      description: form.description,
      image: form.image || "https://via.placeholder.com/200x250.png?text=No+Image",
    };

    setBooks([...books, newBook]);

    // reset form
    setForm({ title: "", author: "", year: "", description: "", image: "" });
  };

  return (
    <div className="container">
      <h2 className="mb-4">📘 Daftar Buku</h2>

      {/* Form Tambah Buku */}
      <div className="card p-3 mb-4">
        <h5>Tambah Buku Baru</h5>
        <input type="text" name="title" placeholder="Judul Buku" value={form.title} onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="author" placeholder="Penulis" value={form.author} onChange={handleChange} className="form-control mb-2" />
        <input type="number" name="year" placeholder="Tahun" value={form.year} onChange={handleChange} className="form-control mb-2" />
        <textarea name="description" placeholder="Deskripsi" value={form.description} onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="image" placeholder="Link Gambar" value={form.image} onChange={handleChange} className="form-control mb-2" />
        <button onClick={addBook} className="btn btn-success">
          ➕ Tambah Buku
        </button>
      </div>

      {/* Daftar Buku */}
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-3" key={book.id}>
            <div className="card shadow-sm h-100">
              <img src={book.image} alt={book.title} className="card-img-top" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {book.author} ({book.year})
                </h6>
                <p className="card-text flex-grow-1">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
