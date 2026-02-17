import { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    shipping: "standard",
    payment: "card",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl text-[#7e3805] font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Customer Info */}
        <div className="card">
          <h2 className="section-title text-[#7e3805] ">Customer Information</h2>
          <input name="name" placeholder="Full Name" onChange={handleChange} className="input" />
          <input name="email" placeholder="Email" onChange={handleChange} className="input" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="input" />
        </div>

        {/* Delivery Details */}
        <div className="card">
          <h2 className="section-title text-[#7e3805] ">Delivery Details</h2>
          <input name="address" placeholder="Address" onChange={handleChange} className="input" />
          <input name="city" placeholder="City" onChange={handleChange} className="input" />
          <input name="zip" placeholder="ZIP Code" onChange={handleChange} className="input" />

          <select name="shipping" onChange={handleChange} className="input">
            <option value="standard">Standard Shipping</option>
            <option value="express">Express Shipping</option>
          </select>
        </div>

        {/* Payment */}
        <div className="card">
          <h2 className="section-title text-[#7e3805] ">Payment Information</h2>

          <select name="payment" onChange={handleChange} className="input">
            <option value="card">Credit/Debit Card</option>
            <option value="cod">Cash on Delivery</option>
            <option value="wallet">Digital Wallet</option>
          </select>

          {form.payment === "card" && (
            <>
              <input placeholder="Card Number" className="input" />
              <input placeholder="Expiry Date" className="input" />
              <input placeholder="CVV" className="input" />
            </>
          )}

          <button className="primary-btn  ">Proceed to Payment</button>
        </div>
      </div>

      <style jsx>{`
        .card {
          background: white;
          padding: 16px;
          border-radius: 16px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .section-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 6px;
        }

        .input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 14px;
        }
          .input:focus{
          border-color:#7e3805;
          outline:none;
          }

        .primary-btn {
          margin-top: 12px;
          padding: 12px;
          background: #7e3805;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          cursor: pointer;
        }

        .primary-btn:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
