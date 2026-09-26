import { Link } from 'react-router-dom';
import { useLanguage } from '../providers/LanguageProvider';

export function HomePage(): JSX.Element {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{isArabic ? 'حلاقة البلد' : 'Helaqat El Balad'}</h1>
          <p className="hero-subtitle">
            {isArabic
              ? 'تجربة حلاقة حديثة وعصرية'
              : 'A Modern Barber Experience'}
          </p>
          <Link to="/booking" className="ui-button ui-button--primary">
            {isArabic ? 'احجز الآن' : 'Book Now'}
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <h2>{isArabic ? 'خدماتنا' : 'Our Services'}</h2>
        <p className="section-description">
          {isArabic
            ? 'نقدم مجموعة متنوعة من الخدمات المتميزة'
            : 'We offer a variety of premium services'}
        </p>
        <Link to="/services" className="section-link">
          {isArabic ? 'اعرض جميع الخدمات' : 'View All Services'} →
        </Link>
      </section>

      {/* Why Us Section */}
      <section className="section why-us">
        <h2>{isArabic ? 'لماذا اخترنا؟' : 'Why Choose Us?'}</h2>
        <div className="features">
          <div className="feature">
            <img className="ui-feature-image" src="/Craftsmanship.jpg" alt="Experience" />
            <h3>{isArabic ? 'خبرة' : 'Experience'}</h3>
            <p>{isArabic ? 'حلاقون محترفون بسنوات خبرة' : 'Professional barbers with years of experience'}</p>
          </div>
          <div className="feature">
            <img className="ui-feature-image" src="/hot-towel.jpg" alt="Quality" />
            <h3>{isArabic ? 'جودة' : 'Quality'}</h3>
            <p>{isArabic ? 'أفضل الأدوات والمنتجات' : 'Best tools and products'}</p>
          </div>
          <div className="feature">
            <img className="ui-feature-image" src="/Interior.jpg" alt="Comfort" />
            <h3>{isArabic ? 'راحة' : 'Comfort'}</h3>
            <p>{isArabic ? 'بيئة مريحة وودية' : 'Comfortable and friendly environment'}</p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section booking-cta">
        <h2>{isArabic ? 'احجز موعدك الآن' : 'Book Your Appointment Today'}</h2>
        <p>
          {isArabic
            ? 'احصل على أفضل خدمات الحلاقة في المدينة'
            : 'Get the best barbering services in the city'}
        </p>
        <Link to="/booking" className="ui-button ui-button--dark ui-button--large">
          {isArabic ? 'احجز الآن' : 'Book Now'}
        </Link>
      </section>
    </div>
  );
}
