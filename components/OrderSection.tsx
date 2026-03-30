"use client";

import { useState } from "react";

type OrderType = "hardcopy" | "ebook" | null;
type DeliveryType = "pickup" | "delivery" | null;

const PICKUP_POINTS = ["Ijebu Ode", "UI Ibadan", "Lagos"];

export default function OrderSection() {
  const [orderType, setOrderType] = useState<OrderType>(null);
  const [deliveryType, setDeliveryType] = useState<DeliveryType>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pickupPoint: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

fetch("https://gada-web-backend.vercel.app/v1/purchase", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",

  },
  body: JSON.stringify({
    fullname: form.name,
    email: form.email,
    type: orderType === "hardcopy" ? "hardCopy" : "softCopy",
    address: form.address,
    phone: form.phone,
    delivery_type: deliveryType,
    pickup_location: form.pickupPoint,
  }),
})
  .then((res) => res.json()) // ✅ fix here
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
      setSubmitted(true);
    };

  const resetForm = () => {
    setOrderType(null);
    setDeliveryType(null);
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", address: "", pickupPoint: "" });
  };

  return (
    <section className="order-section section" id="order">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <span className="hero-badge">Get Your Copy</span>
          <h2 className="section-title order-section-title">Order the Book</h2>
          <p className="section-subtitle">
            Choose your preferred format and we&apos;ll get it to you.
          </p>
        </div>


        {/* Order Type Selector */}
        {!submitted && (
          <>
            <div className="order-type-grid">
              {/* Hard Copy Card */}
              <button
                className={`order-type-card ${orderType === "hardcopy" ? "active" : ""}`}
                onClick={() => {
                  setOrderType("hardcopy");
                  setDeliveryType(null);
                }}
                type="button"
              >
                <span className="order-type-icon">📚</span>
                <h3 className="order-type-title">Hard Copy</h3>
                <div className="order-type-price-wrapper">
                  <span className="original-price">₦23,000</span>
                  <span className="discounted-price">₦20,000</span>
                </div>
                <span className="discount-badge">Discounted Price</span>
                <p className="order-type-desc">
                  Receive a physical copy of the book via pick-up or home delivery.
                </p>
              </button>

              {/* E-Book Card */}
              <button
                className={`order-type-card ${orderType === "ebook" ? "active" : ""}`}
                onClick={() => {
                  setOrderType("ebook");
                  setDeliveryType(null);
                }}
                type="button"
              >
                <span className="order-type-icon">💻</span>
                <h3 className="order-type-title">E-Book Request</h3>
                <div className="order-type-price-wrapper">
                  <span className="discounted-price">₦20,000</span>
                </div>
                <span className="ebook-badge">By Request Only</span>
                <p className="order-type-desc">
                  Make payment, fill the form, and we will send your digital copy directly.
                </p>
              </button>
            </div>

            

            {/* Form Area */}
            {orderType && (
              <div className="order-form-wrapper">
                {/* Hard Copy Flow */}
                {orderType === "hardcopy" && (
                  <>
                    {/* Delivery Type Sub-Options */}
                    {!deliveryType && (
                      <div className="delivery-type-section">
                        <h3 className="delivery-type-heading">How would you like to receive it?</h3>
                        <div className="delivery-type-grid">
                          <button
                            className="delivery-type-card"
                            onClick={() => setDeliveryType("pickup")}
                            type="button"
                          >
                            <span className="delivery-icon">🏪</span>
                            <span className="delivery-label">Pick Up</span>
                            <span className="delivery-desc">Collect from a designated pick-up point near you</span>
                          </button>
                          <button
                            className="delivery-type-card"
                            onClick={() => setDeliveryType("delivery")}
                            type="button"
                          >
                            <span className="delivery-icon">🚚</span>
                            <span className="delivery-label">Delivery</span>
                            <span className="delivery-desc">We deliver directly to your doorstep</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Pick Up Form */}
                    {deliveryType === "pickup" && (
                      <form className="order-form" onSubmit={handleSubmit}>
                        <div className="form-header">
                          <button
                            type="button"
                            className="back-btn"
                            onClick={() => setDeliveryType(null)}
                          >
                            ← Back
                          </button>
                          <h3 className="form-section-title">📍 Pick-Up Details</h3>
                        </div>

                        <div className="form-grid">
                          <div className="form-group">
                            <label className="form-label" htmlFor="name">Full Name *</label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              className="form-input"
                              placeholder="Enter your full name"
                              value={form.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="email">Email Address *</label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              className="form-input"
                              placeholder="your@email.com"
                              value={form.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="phone">Phone Number *</label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              className="form-input"
                              placeholder="+234 000 000 0000"
                              value={form.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="pickupPoint">
                              Select Pick-Up Point *
                            </label>
                            <select
                              id="pickupPoint"
                              name="pickupPoint"
                              className="form-input form-select"
                              value={form.pickupPoint}
                              onChange={handleChange}
                              required
                            >
                              <option value="">-- Choose a location --</option>
                              {PICKUP_POINTS.map((point) => (
                                <option key={point} value={point}>
                                  {point}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <PaymentInfo />
                        <button type="submit" className="btn order-submit-btn hover-lift">
                          ✅ Confirm Order — ₦20,000
                        </button>
                      </form>
                    )}

                    {/* Delivery Form */}
                    {deliveryType === "delivery" && (
                      <form className="order-form" onSubmit={handleSubmit}>
                        <div className="form-header">
                          <button
                            type="button"
                            className="back-btn"
                            onClick={() => setDeliveryType(null)}
                          >
                            ← Back
                          </button>
                          <h3 className="form-section-title">🚚 Delivery Details</h3>
                        </div>

                        <div className="form-grid">
                          <div className="form-group">
                            <label className="form-label" htmlFor="name-delivery">Full Name *</label>
                            <input
                              id="name-delivery"
                              name="name"
                              type="text"
                              className="form-input"
                              placeholder="Enter your full name"
                              value={form.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="email-delivery">Email Address *</label>
                            <input
                              id="email-delivery"
                              name="email"
                              type="email"
                              className="form-input"
                              placeholder="your@email.com"
                              value={form.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="phone-delivery">
                              Contact Person&apos;s Phone Number *
                            </label>
                            <input
                              id="phone-delivery"
                              name="phone"
                              type="tel"
                              className="form-input"
                              placeholder="+234 000 000 0000"
                              value={form.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group form-group-full">
                            <label className="form-label" htmlFor="address">
                              Delivery Address *
                            </label>
                            <textarea
                              id="address"
                              name="address"
                              className="form-input form-textarea"
                              placeholder="Enter full delivery address including street, city, and state"
                              value={form.address}
                              onChange={handleChange}
                              required
                              rows={3}
                            />
                          </div>
                        </div>

                        <PaymentInfo />
                        <button type="submit" className="btn order-submit-btn hover-lift">
                          ✅ Confirm Order — ₦20,000
                        </button>
                      </form>
                    )}
                  </>
                )}

                {/* E-Book Request Flow */}
                {orderType === "ebook" && (
                  <form className="order-form" onSubmit={handleSubmit}>
                    <div className="ebook-notice-inline">
                      <span>📖</span>
                      <p>
                        Kindly make payment of <strong>₦20,000</strong> using the details below and
                        fill this form. We will contact you immediately after confirmation.
                      </p>
                    </div>

                    <h3 className="form-section-title">💻 E-Book Request Form</h3>

                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name-ebook">Full Name *</label>
                        <input
                          id="name-ebook"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="Enter your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email-ebook">Email Address *</label>
                        <input
                          id="email-ebook"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone-ebook">Phone Number *</label>
                        <input
                          id="phone-ebook"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="+234 000 000 0000"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <PaymentInfo />
                    <button type="submit" className="btn order-submit-btn hover-lift">
                      ✅ Submit E-Book Request — ₦20,000
                    </button>
                  </form>
                )}
              </div>
            )}
          </>
        )}

        {/* Success State */}
        {submitted && (
          <div className="order-success">
            <div className="success-icon-wrapper">
              <span className="success-icon">🎉</span>
            </div>
            <h3 className="success-title">Request Received!</h3>
            <p className="success-text">
              Thank you, <strong>{form.name}</strong>! Your order has been submitted successfully.
              Please ensure payment of <strong>₦20,000</strong> is made. We will reach out to
              you via <strong>{form.email}</strong> to confirm and process your order.
            </p>
            <button className="btn hover-lift" onClick={resetForm}>
              Place Another Order
            </button>
          </div>
        )}
      </div>

      {/* Copyright Caution */}
        <div className="copyright-caution">
          <span className="caution-icon">⚠️</span>
          <p>
            <strong>Copyright Notice:</strong> No part of this book may be plagiarized,
            photocopied, reproduced, distributed, or transmitted in any form or by any means,
            including photocopying, recording, or other electronic or mechanical methods, without
            the prior written permission of the author.
          </p>
        </div>

        {/* Soft Copy Notice */}
        <div className="softcopy-notice">
          <span className="notice-icon">📖</span>
          <p>
            <strong>Please Note:</strong> This book is currently available in <strong>hard copy only</strong>.
            Soft copies (e-books) are <strong>strictly by request</strong>. To request an e-book,
            please make payment and we will contact you immediately.
          </p>
        </div>
    </section>
  );
}

function PaymentInfo() {
  return (
    <div className="payment-info-box">
      <h4 className="payment-title">💳 Payment Details</h4>
      <p className="payment-subtitle">Make payment to the account below, then submit this form.</p>
      <div className="payment-details-grid">
        <div className="payment-detail-item">
          <span className="payment-detail-label">Bank</span>
          <span className="payment-detail-value">Opay</span>
        </div>
        <div className="payment-detail-item">
          <span className="payment-detail-label">Account Name</span>
          <span className="payment-detail-value">Adekoya Anuoluwapo</span>
        </div>
        <div className="payment-detail-item">
          <span className="payment-detail-label">Account Number</span>
          <span className="payment-detail-value account-number">8135667574</span>
        </div>
        <div className="payment-detail-item">
          <span className="payment-detail-label">Amount</span>
          <span className="payment-detail-value amount-highlight">₦20,000</span>
        </div>
      </div>
      <p className="payment-note">
        ⚡ Use your <strong>name </strong> as payment description/narration for easy tracking.
      </p>
    </div>
  );
}
