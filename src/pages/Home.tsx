import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { company, whatsappUrl } from '../data/company';
import { products } from '../data/products';

export default function Home() {
  const { language, t } = useLanguage();
  const [slide, setSlide] = useState(0);

  const heroSlides = [
    {
      eyebrow: t('Fresh care for everyday living', '为日常生活带来清新护理'),
      title: t('Premium cleaning. Personal care. One bright brand.', '优质清洁与个人护理，尽在一个鲜明品牌。'),
      text: t(
        'Discover the MINGER range for laundry, dishes, hair and everyday body care — presented in a fresh, easy-to-recognize family.',
        '探索 MINGER 在洗衣、洗碗、头发护理和日常身体护理方面的完整产品系列，以清新、易识别的品牌家族呈现。',
      ),
      image: '/images/product-lineup.png',
      className: 'hero-blue',
      badge: t('Complete MINGER range', '完整的 MINGER 产品系列'),
    },
    {
      eyebrow: t('Household care', '家居护理'),
      title: t('Turn everyday cleaning into a fresher routine.', '让日常清洁变成更清新的习惯。'),
      text: t(
        'From family laundry to sparkling dishes, MINGER household packs are built around practical everyday use.',
        '从家庭洗衣到闪亮餐具，MINGER 家居护理产品围绕实用的日常使用场景打造。',
      ),
      image: '/images/dishwashing-lifestyle.png',
      className: 'hero-green',
      badge: t('Kitchen & laundry care', '厨房与洗衣护理'),
    },
    {
      eyebrow: t('Hair care', '头发护理'),
      title: t('Fresh-looking hair starts with a simple routine.', '清新秀发，从简单护理开始。'),
      text: t(
        'MINGER Shampoo brings a bright personal-care identity to the shelf and a refreshing feel to everyday hair care.',
        'MINGER 洗发露为货架带来鲜明的个人护理形象，也为日常秀发护理带来清爽体验。',
      ),
      image: '/images/shampoo-lifestyle.png',
      className: 'hero-pink',
      badge: t('500ml personal care', '500ml 个人护理'),
    },
    {
      eyebrow: t('Body care', '身体护理'),
      title: t('Refresh your day from the first shower.', '从第一场沐浴开始焕新你的一天。'),
      text: t(
        'A radiant shower-care illustration for a clean, uplifting body-care story on your homepage and marketing touchpoints.',
        '用明亮动人的沐浴护理形象，打造适合首页和营销触点的洁净、愉悦身体护理故事。',
      ),
      image: '/images/shower-gel-hero.png',
      className: 'hero-aqua',
      badge: t('Daily shower care', '日常沐浴护理'),
    },
  ];

  const scenarios = [
    {
      title: t('Laundry days, made brighter', '让洗衣时刻更加明亮轻松'),
      copy: t('Family-size care for everyday washing routines.', '适合日常洗衣场景的家庭装护理。'),
      image: '/images/scene-laundry.jpg',
      link: '/products/laundry-detergent',
      tone: 'blue',
    },
    {
      title: t('A fresher kitchen routine', '让厨房清洁更清新高效'),
      copy: t('Dish care presented for homes, businesses and institutions.', '适用于家庭、商户与机构的餐具护理产品。'),
      image: '/images/scene-kitchen.jpg',
      link: '/products/dishwashing-liquid',
      tone: 'green',
    },
    {
      title: t('Fresh hair, confident routine', '清新秀发，自信日常'),
      copy: t('A bright 500ml shampoo presentation for daily personal care.', '明亮吸睛的 500ml 洗发露，适合日常个人护理。'),
      image: '/images/scene-haircare.jpg',
      link: '/products/shampoo',
      tone: 'pink',
    },
    {
      title: t('Start fresh every day', '每天从焕新开始'),
      copy: t('Refreshing shower care with a clean, energetic look.', '清爽沐浴护理，呈现洁净而充满活力的形象。'),
      image: '/images/scene-shower.jpg',
      link: '/products/shower-gel',
      tone: 'aqua',
    },
  ];

  const motionStories = [
    {
      title: t('Laundry in motion', '动态洗衣场景'),
      text: t('Show washing-day freshness and 5L household practicality.', '展示洗衣日的清新感与 5L 家庭装的实用性。'),
      video: '/videos/laundry.mp4',
    },
    {
      title: t('Kitchen shine', '厨房闪亮时刻'),
      text: t('Use your dishwashing footage to bring the cleaning story to life.', '用洗洁精视频让厨房清洁故事更加生动。'),
      video: '/videos/dishwashing.mp4',
    },
    {
      title: t('Refresh & glow', '焕新与光采'),
      text: t('Highlight body-care freshness with shower-gel lifestyle motion.', '通过沐浴露生活化视频展示身体护理的清新感。'),
      video: '/videos/shower-gel.mp4',
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % heroSlides.length), 5200);
    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  const active = heroSlides[slide];

  return (
    <>
      <section className={`hero hero-slider ${active.className}`}>
        <div className="hero-sheen" />
        <div className="bubble bubble-1" /><div className="bubble bubble-2" /><div className="bubble bubble-3" /><div className="bubble bubble-4" /><div className="bubble bubble-5" />
        <div className="container hero-grid">
          <div className="hero-copy hero-copy-animated" key={`copy-${slide}`}>
            <span className="eyebrow light">{active.eyebrow}</span>
            <h1>{active.title}</h1>
            <p>{active.text}</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-white">{t('Explore products', '浏览产品')} <span>→</span></Link>
              <a href={whatsappUrl(language === 'zh' ? '您好，MINGER，我想咨询你们的产品。' : 'Hello MINGER, I would like to make a product enquiry.')} target="_blank" rel="noreferrer" className="btn btn-whatsapp">{t('WhatsApp enquiry', 'WhatsApp 咨询')}</a>
            </div>
            <div className="trust-row">
              <span>✓ {t('Household Care', '家居护理')}</span><span>✓ {t('Personal Care', '个人护理')}</span><span>✓ {t('Retail & Wholesale', '零售与批发')}</span>
            </div>
          </div>
          <div className="hero-stage" key={`visual-${slide}`}>
            <div className="hero-halo" />
            <img className={`hero-stage-image ${slide === 3 ? 'hero-stage-portrait' : ''}`} src={active.image} alt={active.badge} />
            <div className="hero-badge"><span>✦</span><strong>{active.badge}</strong></div>
          </div>
        </div>
        <div className="container hero-dots" aria-label="Hero slides">
          {heroSlides.map((item, index) => (
            <button key={item.title} aria-label={`Show slide ${index + 1}`} className={slide === index ? 'active' : ''} onClick={() => setSlide(index)} />
          ))}
        </div>
      </section>

      <section className="category-strip">
        <div className="container category-strip-grid">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 70}>
              <Link className={`category-mini accent-${product.accent}`} to={`/products/${product.slug}`}>
                <img src={product.image} alt="" />
                <span>
                  <small>{language === 'zh' ? product.categoryZh : product.category}</small>
                  <strong>{language === 'zh' ? product.nameZh : product.name}</strong>
                  <em>{product.size}</em>
                </span>
                <b>→</b>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section intro-section">
        <div className="container intro-grid">
          <Reveal>
            <div className="intro-copy">
              <span className="eyebrow">{t('Why MINGER', '为什么选择 MINGER')}</span>
              <h2>{t('Everyday essentials designed to look fresh, clear and easy to choose.', '打造清新、清晰、易于选择的日常必需品。')}</h2>
              <p>{t('MINGER brings household cleaning and personal care together under one colorful visual identity. The range is organized to help shoppers understand what each product is for at a glance while giving retailers a consistent brand family to display.', 'MINGER 将家居清洁与个人护理整合在统一而多彩的视觉体系中。整套产品帮助消费者一眼看懂用途，也为零售陈列提供一致的品牌家族形象。')}</p>
              <Link className="btn btn-primary" to="/about">{t('Discover the brand', '了解品牌')}</Link>
            </div>
          </Reveal>
          <div className="feature-tiles">
            {[
              [t('✦', '✦'), t('Clear range', '清晰系列'), t('Four core products across household and personal care.', '涵盖家居清洁与个人护理的四大核心产品。')],
              [t('💧', '💧'), t('Fresh identity', '清新形象'), t('Water, bubbles, clean whites and bright category colors.', '以水感、泡泡、洁白与鲜明色彩塑造品牌形象。')],
              [t('🏠', '🏠'), t('Everyday use', '日常适用'), t('Products positioned around familiar home and care routines.', '围绕熟悉的家庭与护理场景进行产品定位。')],
              [t('🤝', '🤝'), t('Business ready', '商业合作友好'), t('Retail, wholesale and distributor enquiries in one place.', '为零售、批发和经销咨询提供统一入口。')],
            ].map(([icon, title, text], index) => (
              <Reveal key={String(title)} delay={index * 90}>
                <article className="feature-tile"><span>{icon}</span><h3>{title}</h3><p>{text}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section products-section soft-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={t('Our range', '我们的产品系列')}
              title={t('Meet the MINGER collection', '认识 MINGER 产品家族')}
              text={t('Household cleaning and personal-care products presented as one coordinated family.', '家居清洁与个人护理产品以统一协调的品牌家族方式呈现。')}
              centered
            />
          </Reveal>
          <div className="product-grid">
            {products.map((product, index) => <Reveal key={product.slug} delay={index * 80}><ProductCard product={product} /></Reveal>)}
          </div>
          <div className="center-action"><Link className="btn btn-primary" to="/products">{t('See the full catalogue', '查看完整目录')}</Link></div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Brand highlights">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, set) => [
            t('Fresh routines', '清新日常'),
            t('Household care', '家居护理'),
            t('Personal care', '个人护理'),
            t('5L family packs', '5L 家庭装'),
            t('500ml care', '500ml 护理装'),
            t('Retail & wholesale', '零售与批发'),
          ].map((item) => <span key={`${set}-${item}`}>✦ {item}</span>))}
        </div>
      </section>

      <section className="section motion-showcase-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={t('Video showcase', '视频展示')}
              title={t('Bring MINGER to life with motion', '用动态内容让 MINGER 更鲜活')}
              text={t('Your uploaded product videos are now woven into the website experience to make the brand feel more lively and immersive.', '你上传的产品视频已融入网站体验中，让品牌更生动、更具沉浸感。')}
              centered
            />
          </Reveal>
          <div className="video-showcase-grid">
            {motionStories.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="video-card">
                  <video src={item.video} autoPlay muted loop playsInline controls />
                  <div className="video-card-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section moments-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={t('MINGER in everyday life', 'MINGER 的日常场景')}
              title={t('More than products — moments people recognize', '不仅仅是产品，更是人们熟悉的生活时刻')}
              text={t('Explore the range through familiar routines at home, in the bathroom and in the kitchen.', '通过家庭、浴室和厨房中的熟悉场景探索整个产品系列。')}
              centered
            />
          </Reveal>
          <div className="moments-grid">
            {scenarios.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <Link to={item.link} className={`moment-card moment-${item.tone}`}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="moment-overlay"><span>{t('Everyday MINGER', '日常 MINGER')}</span><h3>{item.title}</h3><p>{item.copy}</p><b>{t('Explore product →', '查看产品 →')}</b></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section numbers-section">
        <div className="container numbers-grid">
          {[
            ['4', t('Core products', '核心产品')],
            ['2', t('Care categories', '护理类别')],
            ['5L', t('Household pack size', '家居装规格')],
            ['500ml', t('Personal-care size', '个人护理规格')],
          ].map(([value, label], index) => (
            <Reveal key={label} delay={index * 70}><div className="number-card"><strong>{value}</strong><span>{label}</span></div></Reveal>
          ))}
        </div>
      </section>

      <section className="section spotlight-section">
        <div className="container spotlight-grid">
          <Reveal className="spotlight-media"><img src="/images/brochure-visual.png" alt="MINGER brand and product presentation" /></Reveal>
          <Reveal className="spotlight-copy" delay={120}>
            <span className="eyebrow">{t('For homes & businesses', '适用于家庭与企业')}</span>
            <h2>{t('A range that can move from the home shelf to the retail shelf.', '一个可以从家庭货架走向零售货架的产品系列。')}</h2>
            <p>{t('The website is set up to support individual enquiries as well as shops, supermarkets, salons, hospitality businesses and institutions looking to discuss quantities or stocking opportunities.', '本网站既适合个人咨询，也适合商店、超市、沙龙、酒店和机构客户进行数量采购与铺货合作咨询。')}</p>
            <div className="spotlight-list"><span>{t('Retail product enquiries', '零售产品咨询')}</span><span>{t('Bulk and wholesale discussions', '批量与批发洽谈')}</span><span>{t('Distributor opportunities', '经销合作机会')}</span><span>{t('Hospitality and institutional supply enquiries', '酒店及机构供货咨询')}</span></div>
            <div className="hero-actions dark-actions"><Link className="btn btn-primary" to="/wholesale">{t('Wholesale & distribution', '批发与经销')}</Link><Link className="btn btn-outline" to="/contact">{t('Contact MINGER', '联系 MINGER')}</Link></div>
          </Reveal>
        </div>
      </section>

      <section className="section faq-section soft-section">
        <div className="container faq-grid">
          <Reveal>
            <div className="faq-intro"><span className="eyebrow">{t('Quick answers', '快速解答')}</span><h2>{t('Everything you need to start exploring MINGER.', '开始了解 MINGER 所需的一切信息。')}</h2><p>{t('Product details, sizes, business enquiries and direct contact options are available throughout the site.', '产品信息、规格、商业咨询与直接联系入口遍布整个网站。')}</p></div>
          </Reveal>
          <Reveal delay={100}>
            <div className="faq-list">
              <details open><summary>{t('What products are currently in the range?', '目前有哪些产品？')}</summary><p>{t('Laundry Detergent 5L, Dishwashing Liquid 5L, Shampoo 500ml and Shower Gel 500ml.', '当前产品包括：5L 洗衣液、5L 洗洁精、500ml 洗发露和 500ml 沐浴露。')}</p></details>
              <details><summary>{t('Can I enquire about wholesale quantities?', '可以咨询批发数量吗？')}</summary><p>{t('Yes. Use the Wholesale page to prepare a bulk enquiry and continue directly on WhatsApp.', '可以。你可以通过批发页面填写需求，并直接在 WhatsApp 上继续沟通。')}</p></details>
              <details><summary>{t('How do I ask about a specific product?', '如何咨询某个具体产品？')}</summary><p>{t('Open any product page and use the WhatsApp enquiry button. The product name and size will be added to the message automatically.', '打开任意产品页面并点击 WhatsApp 咨询按钮，消息会自动附带产品名称和规格。')}</p></details>
              <details><summary>{t('Where is the company based?', '公司位于哪里？')}</summary><p>{language === 'zh' ? `${company.legalNameZh} 的产品标签显示生产地址位于 ${company.locationZh}。` : `${company.legalName} is listed on the product labels with a production address in ${company.location}.`}</p></details>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-card cta-card-lively">
          <div className="cta-bubbles"><i /><i /><i /></div>
          <div><span className="eyebrow light">{t('Retail • Wholesale • Distribution', '零售 • 批发 • 经销')}</span><h2>{t('Ready to bring MINGER closer to your customers?', '准备让 MINGER 更靠近你的客户了吗？')}</h2><p>{t('Tell us which products and quantities you are interested in and start the conversation directly on WhatsApp.', '告诉我们你感兴趣的产品和数量，直接通过 WhatsApp 开启沟通。')}</p></div>
          <div className="cta-actions"><Link to="/wholesale" className="btn btn-white">{t('Wholesale enquiries', '批发咨询')}</Link><a href={whatsappUrl(language === 'zh' ? '您好，MINGER，我想咨询贵公司的产品。' : 'Hello MINGER, I would like to enquire about your products.')} target="_blank" rel="noreferrer" className="btn btn-ghost-light">{t('Chat on WhatsApp', 'WhatsApp 聊天')}</a></div>
        </div>
      </section>
    </>
  );
}
