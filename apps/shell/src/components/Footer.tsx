import { useLanguage } from '../providers/LanguageProvider';
import { Link } from 'react-router-dom';

export function Footer(): JSX.Element {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="footer-shell">
        <div className="footer-grid">
          <section className="footer-brand">
            <div className="footer-brand-lockup">
              <span className="footer-brand-mark" aria-hidden="true">
                ح
              </span>
              <div>
                <h2 className="footer-title">
                  <span className="footer-title-ar">حلاقة البلد</span>
                  <span className="footer-title-en">Helaqat El Balad</span>
                </h2>
              </div>
            </div>
            <p className="footer-eyebrow">
              {isArabic ? 'تجربة حلاقة مصرية بطابع عصري' : 'A modern Egyptian grooming experience'}
            </p>
          <p className="footer-subtitle">
            {isArabic
              ? 'حلاق حديث وعصري في قلب الحي'
              : 'Modern and contemporary barber shop in the heart of the neighborhood'}
          </p>
            <Link to="/booking" className="ui-button ui-button--primary footer-cta">
              {isArabic ? 'احجز موعدك' : 'Book an appointment'}
              <span aria-hidden="true">↗</span>
            </Link>
          </section>

          <nav className="footer-section" aria-label={isArabic ? 'روابط سريعة' : 'Quick links'}>
            <h3>{isArabic ? 'روابط سريعة' : 'Explore'}</h3>
            <ul className="footer-link-list">
              <li><Link to="/services">{isArabic ? 'الخدمات' : 'Services'}</Link></li>
              <li><Link to="/booking">{isArabic ? 'الحجز' : 'Booking'}</Link></li>
              <li><Link to="/gallery">{isArabic ? 'الصور' : 'Gallery'}</Link></li>
              <li><Link to="/barbers">{isArabic ? 'الحلاقون' : 'Our barbers'}</Link></li>
            </ul>
          </nav>

          <section className="footer-section footer-contact">
            <h3>{isArabic ? 'تواصل معنا' : 'Contact'}</h3>
            <ul className="footer-link-list">
              <li>
                <span className="footer-detail-label">{isArabic ? 'اتصل بنا' : 'Call us'}</span>
                <a href="tel:+201001234567">+20 100 123 4567</a>
              </li>
              <li>
                <span className="footer-detail-label">{isArabic ? 'راسلنا' : 'Email us'}</span>
                <a href="mailto:info@helaqat.com">info@helaqat.com</a>
              </li>
              <li>
                <span className="footer-detail-label">{isArabic ? 'زورنا' : 'Visit us'}</span>
                <span>{isArabic ? 'القاهرة، مصر' : 'Cairo, Egypt'}</span>
              </li>
            </ul>
          </section>

          <nav className="footer-section" aria-label={isArabic ? 'روابط قانونية' : 'Legal links'}>
            <h3>{isArabic ? 'قانوني' : 'Legal'}</h3>
            <ul className="footer-link-list">
              <li><Link to="/privacy">{isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link></li>
              <li><Link to="/terms">{isArabic ? 'شروط الاستخدام' : 'Terms of Use'}</Link></li>
              <li><Link to="/contact">{isArabic ? 'اتصل بنا' : 'Contact us'}</Link></li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear}{' '}
            {isArabic ? 'حلاقة البلد. جميع الحقوق محفوظة' : 'Helaqat El Balad. All rights reserved'}.
          </p>
          <span className="footer-bottom-note">
            {isArabic ? 'صنع بحب في القاهرة' : 'Made with care in Cairo'}
          </span>
        </div>
      </div>
    </footer>
  );
}
