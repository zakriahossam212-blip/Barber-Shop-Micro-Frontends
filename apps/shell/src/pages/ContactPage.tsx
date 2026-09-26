import { useState } from 'react';
import { useLanguage } from '../providers/LanguageProvider';

export function ContactPage(): JSX.Element {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-contact">
      {/* Hero */}
      <section className="page-hero page-hero--dark">
        <div className="page-hero-content">
          <h1>{isArabic ? 'اتصل بنا' : 'Contact Us'}</h1>
          <p>{isArabic ? 'نحن هنا للإجابة على استفساراتكم' : 'We are here to answer your inquiries'}</p>
        </div>
      </section>

      <section className="section">
        <div className="contact-layout">
          {/* Info */}
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>{isArabic ? 'العنوان' : 'Address'}</h4>
                <p>{isArabic ? 'شارع الجمهورية، القاهرة، مصر' : '12 El-Gomhoreya Street, Cairo, Egypt'}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>{isArabic ? 'الهاتف' : 'Phone'}</h4>
                <p dir="ltr">+20 100 123 4567</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h4>{isArabic ? 'ساعات العمل' : 'Working Hours'}</h4>
                <p>{isArabic ? 'السبت – الخميس: ١٠ص – ١٠م' : 'Sat – Thu: 10am – 10pm'}</p>
                <p>{isArabic ? 'الجمعة: ٢م – ١٠م' : 'Fri: 2pm – 10pm'}</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <div className="contact-success-icon">✅</div>
                <h3>{isArabic ? 'تم الإرسال!' : 'Message Sent!'}</h3>
                <p>{isArabic ? 'سنرد عليك في أقرب وقت ممكن.' : 'We will get back to you as soon as possible.'}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>{isArabic ? 'أرسل لنا رسالة' : 'Send us a message'}</h3>
                <div className="ui-form-group">
                  <label>{isArabic ? 'الاسم' : 'Name'}</label>
                  <input className="ui-field" required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={isArabic ? 'اسمك الكامل' : 'Your full name'} />
                </div>
                <div className="ui-form-group">
                  <label>{isArabic ? 'رقم الهاتف' : 'Phone'}</label>
                  <input className="ui-field" required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+20 1XX XXX XXXX" dir="ltr" />
                </div>
                <div className="ui-form-group">
                  <label>{isArabic ? 'الرسالة' : 'Message'}</label>
                  <textarea className="ui-textarea" required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder={isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...'} />
                </div>
                <button type="submit" className="ui-button ui-button--primary ui-button--block ui-button--large">
                  {isArabic ? 'إرسال' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
