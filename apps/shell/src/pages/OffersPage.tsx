import { useLanguage } from '../providers/LanguageProvider';
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: 'First Visit Discount',
    titleAr: 'خصم الزيارة الأولى',
    description: 'Get 30% off on your first visit to our shop!',
    descriptionAr: 'احصل على خصم 30% في زيارتك الأولى لصالوننا!',
    discount: '30%',
    code: 'FIRST30',
    valid: 'Valid all year',
    validAr: 'صالح طوال العام',
    tone: 'warm',
  },
  {
    id: 2,
    title: 'Weekend Special',
    titleAr: 'عرض نهاية الأسبوع',
    description: 'Book any service on weekends and get a free beard trim.',
    descriptionAr: 'احجز أي خدمة في نهاية الأسبوع واحصل على تهذيب لحية مجاني.',
    discount: 'FREE',
    code: 'WEEKEND',
    valid: 'Every Friday & Saturday',
    validAr: 'كل جمعة وسبت',
    tone: 'success',
  },
  {
    id: 3,
    title: 'Student Offer',
    titleAr: 'عرض الطلاب',
    description: 'Show your student ID and get 20% off any service.',
    descriptionAr: 'أظهر بطاقتك الطلابية واحصل على خصم 20% على أي خدمة.',
    discount: '20%',
    code: 'STUDENT20',
    valid: 'Ongoing',
    validAr: 'مستمر',
    tone: 'info',
  },
];

export function OffersPage(): JSX.Element {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="page-offers">
      {/* Hero */}
      <section className="page-hero page-hero--accent">
        <div className="page-hero-content">
          <h1>{isArabic ? '🎉 عروضنا الحصرية' : '🎉 Exclusive Offers'}</h1>
          <p>{isArabic ? 'استفد من أفضل الصفقات والعروض' : 'Take advantage of our best deals'}</p>
        </div>
      </section>

      <section className="section">
        <div className="offers-grid-page">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`offer-card-page offer-card-page--${offer.tone}`}
            >
              <div className="offer-discount-badge">
                {offer.discount} OFF
              </div>
              <h3>{isArabic ? offer.titleAr : offer.title}</h3>
              <p className="offer-description-page">
                {isArabic ? offer.descriptionAr : offer.description}
              </p>
              <div className="offer-code-box">
                <span>{isArabic ? 'الكود:' : 'Code:'}</span>
                <strong>{offer.code}</strong>
              </div>
              <p className="offer-validity">
                {isArabic ? offer.validAr : offer.valid}
              </p>
              <Link to="/booking" className="shell-cta shell-cta--block shell-cta--center">
                {isArabic ? 'احجز الآن' : 'Book Now'}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
