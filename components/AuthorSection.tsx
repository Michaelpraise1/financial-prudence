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
              Adekoya Anuoluwapo is a tax consultant, lawyer, and personal finance expert with extensive experience in financial systems and wealth management. She is a seasoned speaker dedicated to helping individuals not only earn money but manage and structure it wisely.
            </p>
            <p>
              Her work emphasizes financial prudence as a form of stewardship, combining strategic thinking with responsible leadership. Drawing from biblical principles and real-life insights, she encourages a disciplined, long-term approach to wealth.
            </p>
            <p>
             She believes financial stability comes from structure, discipline, and understanding money, not luck. Her mission is to equip people with practical systems for sustainable financial growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
