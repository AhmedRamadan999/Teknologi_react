import { useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="card-group">
        <div className="card" onClick={() => setOpen(!open)}>
          <img src="Web.jpg" className="card-img-top" alt="Bulding a Web" />
          <div className="card-body">
            <h5 className="card-title">Web Development</h5>
            <p className="card-text">
              We build fast, modern, and responsive websites using the latest
              technologies
            </p>
            {open && (
              <p className="card-text">
                This company has surpassed Irad Academy and we now have better
                teachers than them (I hope they don't fire me 😂)
              </p>
            )}
          </div>
        </div>
        <div className="card" onClick={() => setOpen(!open)}>
          <img
            src="Mobile.jpg"
            className="card-img-top"
            alt="Bulding Moblie App"
          />
          <div className="card-body">
            <h5 className="card-title">Mobile Applications</h5>
            <p className="card-text">
              Custom mobile apps for Android and iOS tailoren to your business
              needs
            </p>
            {open && (
              <p className="card-text">
                We develop games and mobile applications, and we have
                experienced and reliable people in this field.
              </p>
            )}
          </div>
        </div>
        <div className="card" onClick={() => setOpen(!open)}>
          <img src="Cyber.jpg" className="card-img-top" alt="HI" />
          <div className="card-body">
            <h5 className="card-title">Cyber Security</h5>
            <p className="card-text">
              Protect your systems and data with modern security solutions
            </p>
            {open && (
              <p className="card-text">
                Here we protect your files from any hacking and make your
                privacy our priority.
              </p>
            )}
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
