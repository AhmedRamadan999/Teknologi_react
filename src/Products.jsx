import { useEffect, useMemo, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let alive = true;

    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data.json");
        return res.json();
      })
      .then((data) => {
        if (!alive) return;
        setProducts(Array.isArray(data.products) ? data.products : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        if (!alive) return;
        setProducts([]);
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => p.title.toLowerCase().includes(q));
  }, [products, search]);

  const toggleDetails = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleBuy = (title) => {
    alert(`✅ You selected: ${title}`);
  };

  if (loading) {
    return (
      <div className="container my-4">
        <h2 className="fw-bold mb-2">Products</h2>
        <p className="text-muted">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="container my-4 products-page">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
        <div>
          <h2 className="fw-bold mb-1">Products</h2>
          <p className="text-muted mb-0">
            Click a card to toggle details. “Buy Now” shows an alert.
          </p>
        </div>

        {/* search */}
        <div className="search-wrap">
          <input
            className="form-control search-input"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* زر clear عاليسار/يمين حسب اللي بدك:
             اذا بدك الزر عاليسار مثل صورتك: خليه أول عنصر قبل input
             اذا بدك الزر عاليمين: خليه بعد input
          */}
          <button
            className="btn btn-outline-secondary search-btn"
            onClick={() => setSearch("")}
            type="button"
          >
            Clear
          </button>
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="alert alert-warning">
          No products found for: <b>{search}</b>
        </div>
      )}

      <div className="row g-3">
        {filtered.map((p) => {
          const isOpen = openId === p.id;

          return (
            <div className="col-12 col-md-6 col-lg-4" key={p.id}>
              <div
                className={
                  "card product-card h-100 " + (isOpen ? "is-open" : "")
                }
                role="button"
                onClick={() => toggleDetails(p.id)}
              >
                <img
                  src={p.image}
                  className="card-img-top product-img"
                  alt={p.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x380?text=Image+Not+Found";
                  }}
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <h5 className="card-title mb-1">{p.title}</h5>
                    <span className="badge rounded-pill text-bg-success">
                      ${Number(p.price).toFixed(2)}
                    </span>
                  </div>

                  <p className="card-text text-muted mb-3">{p.short}</p>

                  {/* Buttons */}
                  <div
                    className="d-flex gap-2"
                    onClick={(e) => e.stopPropagation()} // مهم: حتى ما يفتح/يسكر الكرت لما نكبس زر
                  >
                    <button
                      className="btn btn-primary flex-grow-1"
                      type="button"
                      onClick={() => handleBuy(p.title)}
                    >
                      Buy Now
                    </button>

                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => toggleDetails(p.id)}
                    >
                      Details
                    </button>
                  </div>

                  {/* Details */}
                  {isOpen && (
                    <div className="product-details mt-3">
                      <hr className="my-3" />
                      <p className="mb-0">{p.details}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
