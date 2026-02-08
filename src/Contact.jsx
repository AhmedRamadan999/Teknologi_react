import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();  
    alert(`Thanks ${form.name || "!"}  Message sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-wrap">
      <div className="contact-card card shadow-sm border-0 rounded-4">
        <div className="card-body p-4 p-md-5">
          <h2 className="fw-bold mb-1">Contact</h2>
          <p className="text-muted mb-4">
            Leave us a message and we’ll get back to you.
          </p>

          <form onSubmit={onSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="form-control"
                placeholder="Your name"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="form-control"
                placeholder="you@example.com"
                required
              />
              <div className="form-text">
                We’ll never share your email with anyone else.
              </div>
            </div>

            <div className="col-12">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                className="form-control"
                rows="5"
                placeholder="Write your message..."
                required
              />
            </div>

            <div className="col-12 d-flex gap-2">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setForm({ name: "", email: "", message: "" })}
              >
                Clear
              </button>
            </div>
          </form>

          <div className="mt-4 p-3 p-md-4 border rounded-4 bg-white shadow-sm">
            <h5 className="fw-bold mb-3">Contact Info</h5>

            <div className="row g-3">
              <div className="col-md-4">
                <div className="text-muted small">Phone</div>
                <div className="fw-semibold">+49 1769870488</div>
              </div>

              <div className="col-md-4">
                <div className="text-muted small">Email</div>
                <div className="fw-semibold">ar086974@gmail.com</div>
              </div>

              <div className="col-md-4">
                <div className="text-muted small">Location</div>
                <div className="fw-semibold">Oldenburg, Germany</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
