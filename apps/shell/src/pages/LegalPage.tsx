import { useLanguage } from '../providers/LanguageProvider';

type LegalPageProps = {
  type: 'privacy' | 'terms';
};

export function LegalPage({ type }: LegalPageProps): JSX.Element {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const isPrivacy = type === 'privacy';

  return (
    <section className="section" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="legal-content">
        <h1>
          {isPrivacy
            ? isArabic
              ? 'سياسة الخصوصية'
              : 'Privacy Policy'
            : isArabic
              ? 'شروط الاستخدام'
              : 'Terms of Use'}
        </h1>
        <p className="legal-copy">
          {isPrivacy
            ? isArabic
              ? 'نحترم خصوصيتك ونستخدم بياناتك فقط لتقديم خدمات الحجز وتحسين تجربتك.'
              : 'We respect your privacy and use your information only to provide booking services and improve your experience.'
            : isArabic
              ? 'باستخدامك هذا الموقع، توافق على استخدامه للحجز والتواصل مع حلاقة البلد بطريقة مسؤولة.'
              : 'By using this website, you agree to use it responsibly for booking and communicating with Helaqat El Balad.'}
        </p>
      </div>
    </section>
  );
}