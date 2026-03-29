export default function FeaturesSection() {
  return (
    <section className="section features-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">What You Will Get</h2>
          <p className="section-subtitle">
            The tools, frameworks, and insights you need to shift your financial trajectory.
          </p>
        </div>
        
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="feature-title">Master Your Mindset</h3>
            <p className="feature-desc">Stop working for money. Learn to see money as a tool, not a master, directing it with purpose and intentionality.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 className="feature-title">Manage Faithfully</h3>
            <p className="feature-desc">Develop structured thinking and disciplined actions to steward your resources wisely through all seasons of life.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3 className="feature-title">Strategic Planning</h3>
            <p className="feature-desc">Build practical systems to prepare for changing seasons, ensuring stability across abundance and uncertainty.</p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-icon-wrapper">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
            <h3 className="feature-title">Long-Term Growth</h3>
            <p className="feature-desc">Discover how to multiply value by deeply understanding how money works, moving beyond conventional limitations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
