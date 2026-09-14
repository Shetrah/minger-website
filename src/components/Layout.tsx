import {
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom';

import { useLanguage } from '../context/LanguageContext';

import {
  company,
  whatsappUrl,
} from '../data/company';


/* ============================================================
   NAVIGATION
   ============================================================ */

const navItems = [
  {
    en: 'Home',
    zh: '首页',
    to: '/',
  },
  {
    en: 'Products',
    zh: '产品',
    to: '/products',
  },
  {
    en: 'About',
    zh: '关于我们',
    to: '/about',
  },
  {
    en: 'Wholesale',
    zh: '批发合作',
    to: '/wholesale',
  },
  {
    en: 'Contact',
    zh: '联系我们',
    to: '/contact',
  },
];


/* ============================================================
   WHATSAPP ICON

   Inline SVG means:
   - no react-icons dependency
   - no lucide dependency
   - works everywhere
   ============================================================ */

type WhatsAppIconProps = {
  size?: number;
  className?: string;
};

function WhatsAppIcon({
  size = 20,
  className = '',
}: WhatsAppIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 2a9.83 9.83 0 0 0-9.84 9.8c0 1.73.46 3.42 1.34 4.9L2 22l5.45-1.43a9.94 9.94 0 0 0 4.54 1.1H12A9.84 9.84 0 1 0 12 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.24.85.87-3.15-.2-.32a8.08 8.08 0 0 1-1.25-4.34A8.3 8.3 0 1 1 12 19.98Zm4.56-6.22c-.25-.12-1.48-.72-1.71-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.16-.3.18-.55.06-.25-.12-1.05-.38-2-1.23a7.48 7.48 0 0 1-1.38-1.7c-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.43.12-.14.16-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.57-1.36-.78-1.87-.2-.49-.41-.43-.57-.44h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.16 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.48-.61 1.69-1.19.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"
      />
    </svg>
  );
}


/* ============================================================
   LAYOUT
   ============================================================ */

export default function Layout({
  children,
}: PropsWithChildren) {
  const [open, setOpen] =
    useState(false);

  const location =
    useLocation();

  const {
    language,
    setLanguage,
    t,
  } = useLanguage();


  /* ==========================================================
     CLOSE MOBILE MENU + SCROLL TO TOP
     ========================================================== */

  useEffect(() => {
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);


  /* ==========================================================
     DEFAULT WHATSAPP MESSAGE
     ========================================================== */

  const contactMessage =
    useMemo(
      () =>
        t(
          'Hello MINGER, I would like to make an enquiry.',
          '您好，MINGER，我想咨询贵公司的产品。',
        ),
      [t],
    );


  return (
    <div className="site-shell">

      {/* ======================================================
          ANNOUNCEMENT BAR
      ======================================================= */}

      <div className="announcement-bar">

        <div className="container announcement-inner">

          <span>
            ✦{' '}
            {t(
              'Fresh cleaning & personal care for everyday routines',
              '为日常生活带来清洁与个人护理的清新体验',
            )}
          </span>


          <span className="announcement-contact">

            {t(
              'Call',
              '致电',
            )}{' '}

            {company.phone}

            {' • '}

            {language === 'zh'
              ? company.locationZh
              : company.location}

          </span>

        </div>

      </div>


      {/* ======================================================
          HEADER
      ======================================================= */}

      <header className="site-header">

        <div className="container nav-wrap">

          {/* BRAND */}
          <Link
            to="/"
            className="brand brand-logo"
            aria-label="MINGER home"
          >

            <img
              src="/images/minger-logo.png"
              alt="MINGER"
              className="brand-logo-image"
            />

            <span className="brand-copy">

              <strong>
                {company.brand}
              </strong>

              <small>
                {t(
                  'Clean • Fresh • Care',
                  '清洁 • 清新 • 护理',
                )}
              </small>

            </span>

          </Link>


          {/* ==================================================
              HEADER TOOLS
          =================================================== */}

          <div className="header-tools">

            {/* LANGUAGE */}
            <div
              className="lang-toggle"
              aria-label={t(
                'Language toggle',
                '语言切换',
              )}
            >

              <button
                type="button"
                className={
                  language === 'en'
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  setLanguage('en')
                }
              >
                EN
              </button>


              <button
                type="button"
                className={
                  language === 'zh'
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  setLanguage('zh')
                }
              >
                中文
              </button>

            </div>


            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="menu-toggle"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() =>
                setOpen(
                  (value) =>
                    !value,
                )
              }
            >
              <span />
              <span />
              <span />
            </button>

          </div>


          {/* ==================================================
              NAVIGATION
          =================================================== */}

          <nav
            className={`main-nav ${
              open
                ? 'open'
                : ''
            }`}
          >

            {navItems.map(
              (item) => (

                <NavLink
                  key={
                    item.to
                  }
                  to={
                    item.to
                  }
                  className={({
                    isActive,
                  }) =>
                    isActive
                      ? 'active'
                      : ''
                  }
                >
                  {language === 'zh'
                    ? item.zh
                    : item.en}
                </NavLink>

              ),
            )}


            {/* WHATSAPP NAV BUTTON */}
            <a
              className="btn btn-sm btn-whatsapp nav-cta"
              href={whatsappUrl(
                contactMessage,
              )}
              target="_blank"
              rel="noreferrer"
              aria-label={t(
                'Chat with MINGER on WhatsApp',
                '通过 WhatsApp 联系 MINGER',
              )}
            >

              <WhatsAppIcon
                size={19}
                className="whatsapp-icon"
              />

              <span>
                {t(
                  'WhatsApp',
                  'WhatsApp 咨询',
                )}
              </span>

            </a>

          </nav>

        </div>

      </header>


      {/* ======================================================
          PAGE CONTENT
      ======================================================= */}

      <main>
        {children}
      </main>


      {/* ======================================================
          FLOATING WHATSAPP
      ======================================================= */}

      <a
        className="floating-whatsapp"
        href={whatsappUrl(
          contactMessage,
        )}
        target="_blank"
        rel="noreferrer"
        aria-label={t(
          'Chat with MINGER on WhatsApp',
          '通过 WhatsApp 联系 MINGER',
        )}
      >

        <span className="floating-whatsapp-icon">

          <WhatsAppIcon
            size={23}
          />

        </span>


        <b>
          {t(
            'Chat with us',
            '联系我们',
          )}
        </b>

      </a>


      {/* ======================================================
          FOOTER
      ======================================================= */}

      <footer className="site-footer">

        <div className="footer-wave" />


        <div className="container footer-grid">

          {/* ==================================================
              FOOTER BRAND
          =================================================== */}

          <div>

            <div className="brand footer-brand brand-logo">

              <img
                src="/images/minger-logo.png"
                alt="MINGER"
                className="brand-logo-image footer-logo-image"
              />


              <span className="brand-copy">

                <strong>
                  {company.brand}
                </strong>


                <small>
                  {language === 'zh'
                    ? company.shortTaglineZh
                    : company.shortTagline}
                </small>

              </span>

            </div>


            <p className="footer-intro">

              {t(
                'Household cleaning and personal care products brought together with a fresh, practical and colorful identity.',
                '将家居清洁与个人护理产品整合在一起，以清新、实用且富有活力的品牌形象呈现。',
              )}

            </p>


            {/* FOOTER WHATSAPP */}
            <a
              className="footer-whatsapp"
              href={whatsappUrl(
                t(
                  'Hello MINGER, I would like to know more about your products.',
                  '您好，MINGER，我想进一步了解贵公司的产品。',
                ),
              )}
              target="_blank"
              rel="noreferrer"
            >

              <WhatsAppIcon
                size={18}
                className="whatsapp-icon"
              />

              <span>
                {t(
                  'Start a WhatsApp enquiry',
                  '通过 WhatsApp 开始咨询',
                )}
              </span>

              <span aria-hidden="true">
                →
              </span>

            </a>

          </div>


          {/* ==================================================
              EXPLORE
          =================================================== */}

          <div>

            <h4>
              {t(
                'Explore',
                '导航',
              )}
            </h4>


            <Link to="/products">
              {t(
                'Products',
                '产品',
              )}
            </Link>


            <Link to="/about">
              {t(
                'About MINGER',
                '关于 MINGER',
              )}
            </Link>


            <Link to="/wholesale">
              {t(
                'Wholesale',
                '批发合作',
              )}
            </Link>


            <Link to="/contact">
              {t(
                'Contact',
                '联系我们',
              )}
            </Link>

          </div>


          {/* ==================================================
              PRODUCT RANGE
          =================================================== */}

          <div>

            <h4>
              {t(
                'Product range',
                '产品系列',
              )}
            </h4>


            <Link to="/products/laundry-detergent">
              {t(
                'Laundry Detergent',
                '洗衣液',
              )}
            </Link>


            <Link to="/products/dishwashing-liquid-5l">
              {t(
                'Dishwashing Liquid 5L',
                '5L 洗洁精',
              )}
            </Link>


            <Link to="/products/dishwashing-liquid-1l">
              {t(
                'Dishwashing Liquid 1L',
                '1L 洗洁精',
              )}
            </Link>


            <Link to="/products/shampoo">
              {t(
                'Shampoo',
                '洗发露',
              )}
            </Link>


            <Link to="/products/shower-gel">
              {t(
                'Shower Gel',
                '沐浴露',
              )}
            </Link>

          </div>


          {/* ==================================================
              CONTACT
          =================================================== */}

          <div>

            <h4>
              {t(
                'Contact',
                '联系信息',
              )}
            </h4>


            <a
              href={`tel:${company.phone.replace(
                /\s/g,
                '',
              )}`}
            >
              {company.phone}
            </a>


            <a
              href={`mailto:${company.email}`}
            >
              {company.email}
            </a>


            <span>
              {language === 'zh'
                ? company.locationZh
                : company.location}
            </span>


            <span>
              {language === 'zh'
                ? company.legalNameZh
                : company.legalName}
            </span>

          </div>

        </div>


        {/* ==================================================
            FOOTER BOTTOM
        =================================================== */}

        <div className="container footer-bottom">

          <span>
            ©{' '}
            {new Date().getFullYear()}{' '}
            {company.brand}.{' '}

            {t(
              'All rights reserved.',
              '版权所有。',
            )}
          </span>


          <span>
            {t(
              'Cleaning • Personal Care • Retail • Wholesale',
              '清洁 • 个人护理 • 零售 • 批发',
            )}
          </span>

        </div>

      </footer>

    </div>
  );
}