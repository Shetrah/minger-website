import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { company, whatsappUrl } from '../data/company';

const navItems = [
  { en: 'Home', zh: '首页', to: '/' },
  { en: 'Products', zh: '产品', to: '/products' },
  { en: 'About', zh: '关于我们', to: '/about' },
  { en: 'Wholesale', zh: '批发合作', to: '/wholesale' },
  { en: 'Contact', zh: '联系我们', to: '/contact' },
];

export default function Layout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const contactMessage = useMemo(
    () => t('Hello MINGER, I would like to make an enquiry.', '您好，MINGER，我想咨询贵公司的产品。'),
    [t],
  );

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <span>✦ {t('Fresh cleaning & personal care for everyday routines', '为日常生活带来清洁与个人护理的清新体验')}</span>
          <span className="announcement-contact">
            {t('Call', '致电')} {company.phone} • {language === 'zh' ? company.locationZh : company.location}
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="brand brand-logo" aria-label="MINGER home">
            <img src="/images/minger-logo.png" alt="MINGER" className="brand-logo-image" />
            <span className="brand-copy"><strong>{company.brand}</strong><small>{t('Clean • Fresh • Care', '清洁 • 清新 • 护理')}</small></span>
          </Link>

          <div className="header-tools">
            <div className="lang-toggle" aria-label={t('Language toggle', '语言切换')}>
              <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
              <button type="button" className={language === 'zh' ? 'active' : ''} onClick={() => setLanguage('zh')}>中文</button>
            </div>
            <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
              <span /><span /><span />
            </button>
          </div>

          <nav className={`main-nav ${open ? 'open' : ''}`}>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                {language === 'zh' ? item.zh : item.en}
              </NavLink>
            ))}
            <a className="btn btn-sm btn-whatsapp nav-cta" href={whatsappUrl(contactMessage)} target="_blank" rel="noreferrer">
              {t('WhatsApp', 'WhatsApp 咨询')}
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <a className="floating-whatsapp" href={whatsappUrl(contactMessage)} target="_blank" rel="noreferrer" aria-label="Chat with MINGER on WhatsApp">
        <span>WA</span><b>{t('Chat with us', '联系我们')}</b>
      </a>

      <footer className="site-footer">
        <div className="footer-wave" />
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand brand-logo">
              <img src="/images/minger-logo.png" alt="MINGER" className="brand-logo-image footer-logo-image" />
              <span className="brand-copy"><strong>{company.brand}</strong><small>{language === 'zh' ? company.shortTaglineZh : company.shortTagline}</small></span>
            </div>
            <p className="footer-intro">{t('Household cleaning and personal care products brought together with a fresh, practical and colorful identity.', '将家居清洁与个人护理产品整合在一起，以清新、实用且富有活力的品牌形象呈现。')}</p>
            <a className="footer-whatsapp" href={whatsappUrl(t('Hello MINGER, I would like to know more about your products.', '您好，MINGER，我想进一步了解贵公司的产品。'))} target="_blank" rel="noreferrer">{t('Start a WhatsApp enquiry →', '通过 WhatsApp 开始咨询 →')}</a>
          </div>
          <div>
            <h4>{t('Explore', '导航')}</h4>
            <Link to="/products">{t('Products', '产品')}</Link>
            <Link to="/about">{t('About MINGER', '关于 MINGER')}</Link>
            <Link to="/wholesale">{t('Wholesale', '批发合作')}</Link>
            <Link to="/contact">{t('Contact', '联系我们')}</Link>
          </div>
          <div>
            <h4>{t('Product range', '产品系列')}</h4>
            <Link to="/products/laundry-detergent">{t('Laundry Detergent', '洗衣液')}</Link>
            <Link to="/products/dishwashing-liquid">{t('Dishwashing Liquid', '洗洁精')}</Link>
            <Link to="/products/shampoo">{t('Shampoo', '洗发露')}</Link>
            <Link to="/products/shower-gel">{t('Shower Gel', '沐浴露')}</Link>
          </div>
          <div>
            <h4>{t('Contact', '联系信息')}</h4>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{language === 'zh' ? company.locationZh : company.location}</span>
            <span>{language === 'zh' ? company.legalNameZh : company.legalName}</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {company.brand}. {t('All rights reserved.', '版权所有。')}</span>
          <span>{t('Cleaning • Personal Care • Retail • Wholesale', '清洁 • 个人护理 • 零售 • 批发')}</span>
        </div>
      </footer>
    </div>
  );
}
