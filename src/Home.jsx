import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1>Welcome</h1>
      <p className="text-muted">This is a simple React + Bootstrap project</p>

      <Link to="/products" className="btn btn-primary">
        View Products
      </Link>
    </div>
  );
}
