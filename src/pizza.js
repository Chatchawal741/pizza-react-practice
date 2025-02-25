import React, { useState } from "react";

function Pizza() {
  let [price, setPrice] = useState(0);

  const showPrice = (e) => {
    if (e.target.checked) {
      let currentPrice = parseInt(e.target.value);
      let parsePrice = parseInt(price);
      let total = currentPrice + parsePrice;
      setPrice(total);
    } else {
      let currentPrice = parseInt(e.target.value);
      let parsePrice = parseInt(price);

      setPrice(parsePrice - currentPrice);
    }
  };

  const btnOk = (e) => {
    e.preventDefault();
    if (price) {
      alert(`ขอบคุณที่มาอุดหนุน คุณต้องชำระ ${price} บาท`);
    } else {
      alert("กรุณาเลือก Pizza");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">การสั่ง Pizza แบบกำหนดเอง</h1>
      <div>
        <div className="d-flex justify-content-end">
          <h1>Price: {price} Baht</h1>
        </div>
        <form onSubmit={btnOk} className="w-50">
          {/* Size */}
          <div className="form-group container-img-fluid">
            <p>Select size</p>
            <div className="m-2 row">
              {" "}
              <div className="form-check col-sm-auto">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="small"
                  value={100}
                  onChange={showPrice}
                />
                <label htmlFor="small">small (100)</label>
              </div>
              <div className="form-check col-sm-auto">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="large"
                  value={200}
                  onChange={showPrice}
                />
                <label htmlFor="small">Large (200)</label>
              </div>
            </div>
          </div>
          {/* Crust */}
          <div className="form-group mt-3 container-img-fluid">
            <p>Select crust</p>
            <div className="m-2 row">
              <div className="form-check col-sm-auto">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="shrimp"
                  value={50}
                  onChange={showPrice}
                />
                <label htmlFor="shrimp">Shrimp (50)</label>
              </div>
              <div className="form-check col-sm-auto">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="cheese"
                  value={60}
                  onChange={showPrice}
                />
                <label htmlFor="cheese">Cheese (60)</label>
              </div>
              <div className="form-check col-sm-auto">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="bacon"
                  value={50}
                  onChange={showPrice}
                />
                <label htmlFor="bacon">Bacon (50)</label>
              </div>
            </div>
          </div>
          {/* Adding */}
          <div className="form-group mt-3">
            <p>Additional orders</p>
            <input type="text" className="form-control" name="adding" />
          </div>
          <div className="d-flex justify-content-end mt-3">
            <div className="w-25">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                OK
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pizza;
