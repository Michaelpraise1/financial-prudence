export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Key Quotes & Takeaways</h2>
          <p className="section-subtitle">Core principles excerpted directly from the chapters.</p>
        </div>
        
        <div className="testimonials-grid">
          {[
            "The biggest difference between a financial success and financial failure is how well you manage your money.",
            "To manage your finance, you must first master it.",
            "You cannot undersell your value when you expect people to value you.",
            "The goal of financial prudence is to have long-term financial stability."
          ].map((quote, idx) => (
            <div className="testimonial-card hover-lift" key={idx}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFD620" stroke="#FFD620" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="testimonial-text">{quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">Q{idx+1}</div>
                <div>
                  <div className="testimonial-name">Financial Prudence</div>
                  <div className="testimonial-role">Book Excerpt</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
