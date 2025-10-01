export default function Team() {
  return (
    <div className="text-center">
      <h1 className="mb-4">Meet Our Team</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <img src={`${impor.meta.env.BASE_URL}asset/cole-palmer2.jpg`} className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">Yogi</h5>
              <p className="card-text">Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <img src={`${impor.meta.env.BASE_URL}asset/ano-id-new2.jpg`} className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">Fadly</h5>
              <p className="card-text">Backend Developer</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm mb-4">
            <img src={`${impor.meta.env.BASE_URL}asset/pipet-jadii.png`} className="card-img-top" alt="Team Member" />
            <div className="card-body">
              <h5 className="card-title">Philifs</h5>
              <p className="card-text">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
