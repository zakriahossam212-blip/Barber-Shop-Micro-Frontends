import { useLanguage } from '../providers/LanguageProvider';

export function AboutPage(): JSX.Element {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="page-about">
      {/* Hero */}
      <section
        className="page-hero page-hero--story"
      >
        <div className="page-hero-content">
          <h1>{isArabic ? 'قصتنا' : 'Our Story'}</h1>
          <p>{isArabic ? 'عراقة وأصالة منذ عام ٢٠١٠' : 'Tradition and authenticity since 2010'}</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="about-grid">
          <div className="about-text">
            <h2>{isArabic ? 'من نحن' : 'Who We Are'}</h2>
            <p>
              {isArabic
                ? 'حلاقة البلد هي صالون حلاقة مصري أصيل أُسِّس في عام ٢٠١٠ بهدف تقديم تجربة حلاقة راقية تجمع بين الأساليب التقليدية المصرية والتقنيات الحديثة.'
                : 'Helaqat El Balad is an authentic Egyptian barber shop founded in 2010 with the goal of delivering a premium grooming experience that blends traditional Egyptian styles with modern techniques.'}
            </p>
            <p className="about-text-follow-up">
              {isArabic
                ? 'يضم فريقنا أمهر الحلاقين ذوي الخبرة الواسعة، الذين يحرصون على أن تغادر كل زيارة بأفضل مظهر ممكن.'
                : 'Our team consists of the most skilled barbers with extensive experience, ensuring you leave every visit looking your absolute best.'}
            </p>
          </div>
          <div className="about-img">
            <img src="/Interior.jpg" alt="Interior" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <div className="section about-stats-container">
          <div className="about-stats">
            {[
              { num: '14+', label: isArabic ? 'سنوات خبرة' : 'Years of Experience' },
              { num: '4', label: isArabic ? 'حلاقون محترفون' : 'Expert Barbers' },
              { num: '10K+', label: isArabic ? 'عميل سعيد' : 'Happy Customers' },
              { num: '4.9★', label: isArabic ? 'تقييم العملاء' : 'Customer Rating' },
            ].map((stat) => (
              <div key={stat.num} className="stat-item">
                <span className="stat-num">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
