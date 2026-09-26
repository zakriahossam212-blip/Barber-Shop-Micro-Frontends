import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLanguage } from '../providers/LanguageProvider';
import { useTheme } from '../providers/ThemeProvider';

interface NavLink {
  label: string;
  labelAr: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', labelAr: 'الرئيسية', path: '/' },
  { label: 'Services', labelAr: 'الخدمات', path: '/services' },
  { label: 'Barbers', labelAr: 'الحلاقون', path: '/barbers' },
  { label: 'Offers', labelAr: 'العروض', path: '/services/offers' },
  { label: 'Gallery', labelAr: 'الصور', path: '/gallery' },
  { label: 'About', labelAr: 'من نحن', path: '/about' },
  { label: 'Contact', labelAr: 'اتصل بنا', path: '/contact' },
  { label: 'Booking', labelAr: 'احجز الآن', path: '/booking' },
];

export function Header(): JSX.Element {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isArabic = language === 'ar';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = (): void => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="header" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-ar">حلاقة البلد</span>
          <span className="logo-en">Helaqat El Balad</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? (isArabic ? 'إغلاق القائمة' : 'Close menu') : isArabic ? 'فتح القائمة' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav id="site-navigation" className={`nav${isMenuOpen ? ' is-open' : ''}`} aria-label={isArabic ? 'التنقل الرئيسي' : 'Main navigation'}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  onClick={closeMenu}
                >
                  {isArabic ? link.labelAr : link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          {/* My Bookings */}
          <Link
            to="/my-bookings"
            className="header-icon-btn"
            aria-label={isArabic ? 'حجوزاتي' : 'My Bookings'}
            title={isArabic ? 'حجوزاتي' : 'My Bookings'}
            onClick={closeMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
          </Link>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
            aria-pressed={theme === 'dark'}
            title={isArabic ? 'تبديل المظهر' : 'Toggle theme'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-star"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/></svg>
          </button>
          <button
            onClick={toggleLanguage}
            className="lang-toggle"
            aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
            title={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            {isArabic ? 'EN' : 'AR'}
          </button>
        </div>
      </div>
    </header>
  );
}
