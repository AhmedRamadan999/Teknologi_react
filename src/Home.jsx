import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-hero rounded-4 p-4 p-md-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-6 fw-bold mb-2">Welcome 👋</h1>
          <p className="lead text-muted mb-4">
            This is a simple React + Bootstrap project. It demonstrates routing,
            reusable layout, and a products page with search and expandable
            cards.
          </p>

          <div className="d-flex flex-wrap gap-2">
            <NavLink to="/products" className="btn btn-primary">
              View Products
            </NavLink>
            <NavLink to="/contact" className="btn btn-outline-secondary">
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3">Mini Article</h5>
              <p className="text-muted mb-0">
                Modern web apps use components to keep UI clean and reusable.
                With React Router we switch pages without reloading the website,
                which makes the experience faster and smoother.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
