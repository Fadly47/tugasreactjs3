export default function Contact() {
  return (
    <div className="text-center">
      <h1 className="mb-4">Contact Us 📩</h1>
      <p className="lead">Silakan hubungi kami melalui form berikut:</p>
      <form className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Nama" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Pesan"></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Kirim
        </button>
      </form>
    </div>
  );
}
