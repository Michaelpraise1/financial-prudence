import Image from "next/image";

export default function AuthorSection() {
  return (
    <section className="section author-section">
      <div className="container author-grid">
        <div className="author-image-wrapper">
          <Image 
            src="/author_image.JPEG" 
            alt="Adekoya Anuoluwapo" 
            fill
            style={{ objectFit: 'cover' }}
            className="hover-lift"
          />
        </div>
        <div className="author-content">
          <h2 className="section-title">A Few Words About The Author</h2>
          <h3 className="author-name text-gradient">Adekoya Anuoluwapo</h3>
          <span className="author-title">Tax Consultant, Lawyer & Financial Expert</span>
          
          <div className="author-bio">
            <p>
              Adekoya Anuoluwapo is a personal finance expert with years of professional experience. 
              She has spent years studying financial systems, business structures, and the principles that guide sustainable wealth and responsible money management. 
            </p>
            <p>
              As a seasoned speaker, she is deeply committed to helping individuals understand not just how to earn money, but how to manage, structure, and steward it wisely.
              Her works focus on financial prudence, not merely as a set of financial techniques, but as a stewardship which requires strategic thinking and responsible leadership. 
            </p>
            <p>
              Drawing inspiration from biblical principles, real-life financial patterns, and reflective insights, she challenges conventional thinking about money and encourages readers to approach wealth with clarity, diligence, and long-term vision.
              She believes that financial stability is built through structured thinking, disciplined action, and a deep understanding of how money truly works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
