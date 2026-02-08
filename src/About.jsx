export default function About() {
  return (
    <div className="container my-4">
      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold mb-2">About This Project</h2>
              <p className="text-muted mb-4">
                A simple React + Bootstrap project built to practice routing and
                working with JSON data.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge text-bg-primary">React</span>
                <span className="badge text-bg-dark">Bootstrap</span>
                <span className="badge text-bg-success">JSON</span>
                <span className="badge text-bg-secondary">React Router</span>
              </div>

              <p className="mb-0">
                In this project, I focused on building a clean layout (Layout +
                Outlet), dynamic products page (search + details), and a contact
                form that works without page refresh.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">
              <h5 className="fw-bold mb-3">Technologies Used</h5>
              <ul className="mb-0">
                <li>React Hooks: useState, useEffect</li>
                <li>React Router: Routes, NavLink, Outlet</li>
                <li>Bootstrap layout & components</li>
                <li>Fetch data from JSON</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
