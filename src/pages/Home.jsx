import books from "../utils/books";

export default function Home() {
  return (
    <div className="container">
      <h2 className="mb-4">📚 Bookstore - Home</h2>
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
                <button className="btn btn-primary mt-auto">Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
