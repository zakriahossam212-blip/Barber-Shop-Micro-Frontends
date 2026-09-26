import { useLanguage } from '../providers/LanguageProvider';
import { Link } from 'react-router-dom';

const mockBookings = [
  {
    id: 'BK-001',
    service: 'Classic Haircut',
    serviceAr: 'قصة كلاسيكية',
    barber: 'Ahmed El-Sayed',
    barberAr: 'أحمد السيد',
    date: '2026-10-01',
    time: '11:00 AM',
    status: 'confirmed',
    statusAr: 'مؤكد',
    price: 150,
    currency: 'EGP',
  },
  {
    id: 'BK-002',
    service: 'Beard Trim',
    serviceAr: 'تهذيب اللحية',
    barber: 'Mohamed Farouk',
    barberAr: 'محمد فاروق',
    date: '2026-09-28',
    time: '2:00 PM',
    status: 'completed',
    statusAr: 'مكتمل',
    price: 80,
    currency: 'EGP',
  },
];

export function MyBookingsPage(): JSX.Element {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="page-my-bookings">
      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="page-hero-content">
          <h1>{isArabic ? 'حجوزاتي' : 'My Bookings'}</h1>
          <p>{isArabic ? 'تتبع مواعيدك ومحفوظاتك' : 'Track your appointments and history'}</p>
        </div>
      </section>

      <section className="section">
        {mockBookings.length === 0 ? (
          <div className="bookings-empty ui-text-center">
            <p className="bookings-empty-icon">📅</p>
            <h3>{isArabic ? 'لا توجد حجوزات بعد' : 'No bookings yet'}</h3>
            <p className="ui-muted bookings-empty-copy">
              {isArabic ? 'ابدأ بحجز أول موعد لك!' : 'Start by booking your first appointment!'}
            </p>
            <Link to="/booking" className="ui-button ui-button--primary">
              {isArabic ? 'احجز الآن' : 'Book Now'}
            </Link>
          </div>
        ) : (
          <div className="my-bookings-list">
            {mockBookings.map((booking) => (
              <div key={booking.id} className="booking-card">
                <div className="booking-card-header">
                  <span className="booking-id">{booking.id}</span>
                  <span
                    className={`booking-status booking-status--${booking.status}`}
                  >
                    {isArabic ? booking.statusAr : booking.status}
                  </span>
                </div>
                <div className="booking-card-body">
                  <div className="booking-row">
                    <span>✂️ {isArabic ? booking.serviceAr : booking.service}</span>
                    <strong>{booking.price} {booking.currency}</strong>
                  </div>
                  <div className="booking-row">
                    <span>👤 {isArabic ? booking.barberAr : booking.barber}</span>
                  </div>
                  <div className="booking-row">
                    <span>📅 {booking.date} — {booking.time}</span>
                  </div>
                </div>
                {booking.status === 'confirmed' && (
                  <div className="booking-card-actions">
                    <Link to="/booking" className="ui-button ui-button--primary ui-button--compact">
                      {isArabic ? 'تعديل الحجز' : 'Modify'}
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <div className="bookings-new ui-text-center">
              <Link to="/booking" className="ui-button ui-button--primary">
                {isArabic ? '+ حجز جديد' : '+ New Booking'}
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
