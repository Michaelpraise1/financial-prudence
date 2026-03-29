import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section mb-5">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-badge">New Release Book</span>
          <h1 className="hero-title text-gradient">The Blueprint for Financial Prudence.</h1>
          <p className="hero-subtitle">
            Money shapes nearly every decision we make, yet very few people are ever taught how to truly understand it.
            Earn it, keep it, and build a lifecycle of sustainable wealth.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#order" className="btn hover-lift">Get Your Copy</a>
            {/* <button className="btn btn-outline hover-lift">Read an Excerpt</button> */}
          </div>
        </div>
        <div className="hero-image-wrapper">
          <Image
            src="/book.png"
            alt="Financial Prudence Book Cover"
            width={600}
            height={800}
            className="hero-image"
            priority
          />
        </div>
      </div>
    </section>
  );
}
