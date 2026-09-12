import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { company } from '../data/company';

export default function About() {
  const { language, t } = useLanguage();

  return (
    <>
      <section className="page-hero about-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow light">{t('About MINGER', '关于 MINGER')}</span>
            <h1>{t('Fresh everyday care with a bright, recognizable identity.', '以鲜明且易识别的形象，带来清新的日常护理。')}</h1>
            <p>{language === 'zh' ? company.aboutSummaryZh : company.aboutSummary}</p>
          </div>
          <img src="/images/product-lineup.png" alt="MINGER product line" />
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <Reveal>
            <SectionHeading
              eyebrow={t('Our brand', '我们的品牌')}
              title={t('Built around the routines people already know', '围绕人们熟悉的生活习惯而打造')}
              text={t('MINGER is presented as a practical cleaning and personal-care family: easy-to-recognize packs, clear category colors and familiar everyday-use occasions across laundry, kitchen, hair and body care.', 'MINGER 被打造为一个实用的清洁与个人护理品牌家族：包装易识别、类别色彩清晰，并覆盖洗衣、厨房、头发及身体护理等熟悉的日常场景。')}
            />
          </Reveal>
          <Reveal className="story-card" delay={100}><span>{t('Brand', '品牌')}</span><strong>{company.brand}</strong><span>{t('Company', '公司')}</span><strong>{language === 'zh' ? company.legalNameZh : company.legalName}</strong><span>{t('Categories', '类别')}</span><strong>{t('Household + Personal Care', '家居清洁 + 个人护理')}</strong><span>{t('Pack sizes', '产品规格')}</span><strong>5L + 500ml</strong><span>{t('Location', '地址')}</span><strong>{language === 'zh' ? company.locationZh : company.location}</strong></Reveal>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow={t('Brand pillars', '品牌核心')} title={t('What the MINGER experience communicates', 'MINGER 品牌传达的核心体验')} centered /></Reveal>
          <div className="pillars-grid">
            {[
              ['01', t('Clean', '洁净'), t('Bright layouts, water-inspired visuals and straightforward product information.', '以明亮布局、水感视觉和直接清晰的产品信息展现洁净感。')],
              ['02', t('Fresh', '清新'), t('A lively identity built around bubbles, freshness cues and category color.', '围绕泡泡、新鲜感提示和类别色彩构建活力品牌形象。')],
              ['03', t('Practical', '实用'), t('Simple sizes, clear use cases and fast enquiry paths for customers.', '规格清晰、使用场景明确，方便顾客快速咨询。')],
              ['04', t('Business-ready', '适合商业合作'), t('Structured for retail, wholesale, hospitality and institutional enquiries.', '适用于零售、批发、酒店及机构采购等多种商业场景。')],
            ].map(([n, title, text], index) => <Reveal key={String(title)} delay={index * 80}><article><span>{n}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section brand-story-visual">
        <div className="container brand-story-grid">
          <Reveal className="brand-story-collage"><img src="/images/scene-laundry.jpg" alt="Laundry routine" /><img src="/images/scene-kitchen.jpg" alt="Kitchen routine" /><img src="/images/scene-haircare.jpg" alt="Hair care routine" /></Reveal>
          <Reveal delay={100}><span className="eyebrow">{t('One brand, many routines', '一个品牌，多种场景')}</span><h2>{t('Designed to feel at home wherever care happens.', '无论护理发生在哪里，都让人感觉自然贴近生活。')}</h2><p>{t('From the laundry area to the kitchen sink and personal-care shelf, the range uses one consistent MINGER identity while allowing each product to keep its own visual personality.', '从洗衣区到厨房水槽，再到个人护理货架，整个系列在保持统一 MINGER 品牌识别的同时，也让每款产品保有自己的视觉个性。')}</p><div className="brand-points"><span>{t('Household care', '家居护理')}</span><span>{t('Personal care', '个人护理')}</span><span>{t('Retail display', '零售陈列')}</span><span>{t('Wholesale enquiries', '批发咨询')}</span></div><Link to="/products" className="btn btn-primary">{t('Explore the range', '查看产品系列')}</Link></Reveal>
        </div>
      </section>

      <section className="section about-depth-section soft-section">
        <div className="container about-depth-grid">
          <Reveal>
            <div>
              <span className="eyebrow">{t('More about us', '更多关于我们')}</span>
              <h2>{t('A comprehensive care brand built for households, retailers and growth.', '为家庭、零售商与成长型市场打造的综合护理品牌。')}</h2>
              <p>{t('MINGER is more than a set of labels. It is a coordinated care brand designed to help customers quickly identify what they need while supporting business conversations around retail, wholesale and supply partnerships.', 'MINGER 不只是几张产品标签，而是一个协调完整的护理品牌，帮助顾客快速识别所需产品，同时也支撑零售、批发与供货合作等商业沟通。')}</p>
              <p>{t('Our visual identity focuses on clarity, trust and freshness. Each category uses familiar color cues while still belonging to one brand family, making display, browsing and promotion easier across physical shelves and digital platforms.', '我们的视觉识别聚焦清晰、信赖与清新感。每个品类都采用熟悉的颜色提示，同时保持统一品牌家族属性，让线下货架和线上平台的展示、浏览与推广都更加轻松。')}</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="about-timeline-card">
              <h3>{t('What customers can expect', '客户可以期待什么')}</h3>
              <ul className="about-depth-list">
                <li>{t('Easy-to-recognize household and personal-care products', '易于识别的家居清洁与个人护理产品')}</li>
                <li>{t('Bright, modern presentation for retail and distribution', '适合零售与经销的明亮现代化展示')}</li>
                <li>{t('Practical product sizes for everyday use and business supply', '兼顾日常使用和商业供货的实用规格')}</li>
                <li>{t('Fast contact through phone, email and WhatsApp', '通过电话、邮箱和 WhatsApp 快速联系')}</li>
                <li>{t('A website experience now enhanced with bilingual navigation and motion media', '现已加入双语导航与视频内容的网站体验')}</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-commitments-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={t('Our direction', '我们的发展方向')}
              title={t('A brand shaped around clarity, accessibility and everyday relevance.', '以清晰、易接近和贴近日常生活为核心塑造品牌。')}
              text={t('As MINGER grows, the website and product family are structured to support stronger retail presentation, easier customer education and more direct business conversations.', '随着 MINGER 的发展，网站与产品体系将持续支持更好的零售展示、更简单的客户认知以及更直接的商业沟通。')}
              centered
            />
          </Reveal>
          <div className="commitment-grid">
            {[
              [t('Customer clarity', '客户易理解'), t('Clear product categories, pack sizes and usage information help visitors quickly understand the range.', '清晰的产品分类、包装规格和使用信息，帮助访客快速了解产品系列。')],
              [t('Retail presentation', '零售展示'), t('A coordinated visual family makes it easier to present multiple MINGER products together on shelves and online.', '统一协调的视觉体系，让多款 MINGER 产品更容易在线上线下共同展示。')],
              [t('Direct communication', '直接沟通'), t('Phone, email and WhatsApp enquiry paths are kept visible so customers and partners can reach the business quickly.', '电话、邮箱和 WhatsApp 咨询入口保持清晰可见，方便客户和合作伙伴快速联系。')],
              [t('Bilingual access', '双语访问'), t('English and Chinese language options help the website serve a wider range of visitors and business conversations.', '英文和中文语言选项帮助网站服务更广泛的访客和商业沟通需求。')],
            ].map(([title,text], index) => (
              <Reveal key={String(title)} delay={index * 70}>
                <article className="commitment-card"><span>{String(index + 1).padStart(2,'0')}</span><h3>{title}</h3><p>{text}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-markets-section soft-section">
        <div className="container about-markets-grid">
          <Reveal>
            <div>
              <span className="eyebrow">{t('Who we serve', '我们服务的客户')}</span>
              <h2>{t('Built to support both everyday users and business buyers.', '同时服务日常消费者与商业采购客户。')}</h2>
              <p>{t('MINGER is positioned for household shoppers while also making it easy for retailers, hospitality businesses, institutions, salons and distributors to start a supply conversation.', 'MINGER 面向家庭消费者，同时也方便零售商、酒店、机构、沙龙和经销商开启供货合作沟通。')}</p>
            </div>
          </Reveal>
          <div className="market-chip-grid">
            {[
              t('Homes & families', '家庭与个人'),
              t('Retail shops', '零售门店'),
              t('Supermarkets', '超市'),
              t('Hotels & hospitality', '酒店与服务业'),
              t('Salons & care businesses', '沙龙与护理门店'),
              t('Institutions & offices', '机构与办公室'),
              t('Wholesalers', '批发商'),
              t('Distributors', '经销商'),
            ].map((item,index)=><Reveal key={item} delay={index*45}><div className="market-chip">{item}</div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section video-banner-section">
        <div className="container video-banner-grid">
          <Reveal className="video-banner-copy">
            <span className="eyebrow">{t('Brand in motion', '品牌动态展示')}</span>
            <h2>{t('Motion, imagery and product storytelling all work together.', '视频、图像与产品故事共同打造更鲜活的品牌体验。')}</h2>
            <p>{t('The website now blends product visuals with lifestyle video so visitors stay engaged longer and understand the MINGER story more quickly.', '网站现已将产品视觉与生活化视频结合起来，让访客停留更久、更快速理解 MINGER 的品牌故事。')}</p>
          </Reveal>
          <Reveal className="video-banner-card" delay={100}>
            <video src="/videos/laundry.mp4" autoPlay muted loop playsInline controls />
          </Reveal>
        </div>
      </section>
    </>
  );
}
