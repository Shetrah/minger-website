import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { whatsappUrl } from '../data/company';
import { products } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <section className="section not-found-block">
        <div className="container centered-copy">
          <h1>{t('Product not found', '未找到该产品')}</h1>
          <p>{t('The product you are looking for is not available in the current catalogue.', '你查找的产品目前不在产品目录中。')}</p>
          <Link to="/products" className="btn btn-primary">{t('Back to products', '返回产品列表')}</Link>
        </div>
      </section>
    );
  }

  const name = language === 'zh' ? product.nameZh : product.name;
  const category = language === 'zh' ? product.categoryZh : product.category;
  const description = language === 'zh' ? product.descriptionZh : product.description;
  const highlights = language === 'zh' ? product.highlightsZh : product.highlights;
  const directions = language === 'zh' ? product.directionsZh : product.directions;
  const idealFor = language === 'zh' ? product.idealForZh : product.idealFor;
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="product-detail-hero">
        <div className="container detail-grid">
          <Reveal className={`detail-image-panel accent-${product.accent}`}>
            <img src={product.image} alt={`${name} ${product.size}`} />
          </Reveal>
          <Reveal className="detail-copy" delay={80}>
            <span className="eyebrow">{category}</span>
            <h1>{name}</h1>
            <div className="detail-size">{product.size}</div>
            <p className="lead">{description}</p>
            <ul className="check-list">{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="hero-actions dark-actions">
              <a href={whatsappUrl(language === 'zh' ? `您好，MINGER，我想咨询 ${product.nameZh}（${product.size}）。` : `Hello MINGER, I would like to enquire about ${product.name} (${product.size}).`)} target="_blank" rel="noreferrer" className="btn btn-whatsapp">{t('Enquire on WhatsApp', '通过 WhatsApp 咨询')}</a>
              <Link to="/contact" className="btn btn-outline">{t('Ask a question', '提出问题')}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {product.video && (
        <section className="section product-video-section">
          <div className="container product-video-grid">
            <Reveal>
              <div className="product-video-copy">
                <span className="eyebrow">{t('See it in action', '动态体验产品')}</span>
                <h2>{t(`Experience ${product.name} in a real-life routine.`, `在真实生活场景中体验${product.nameZh}。`)}</h2>
                <p>{t('Watch the product story in motion, then continue below for usage guidance, ideal-use occasions and business enquiry options.', '通过动态视频了解产品使用场景，然后继续查看使用方法、适用场景以及商业咨询选项。')}</p>
                <Link to="/contact" className="btn btn-outline">{t('Talk to MINGER', '联系 MINGER')}</Link>
              </div>
            </Reveal>
            <Reveal className="product-video-frame" delay={100}>
              <video src={product.video} autoPlay muted loop playsInline controls />
            </Reveal>
          </div>
        </section>
      )}

      <section className="section detail-story-section">
        <div className="container detail-story-grid">
          <Reveal className="detail-story-image"><img src={product.lifestyleImage} alt={`${name} lifestyle`} /></Reveal>
          <Reveal className="detail-info-panels" delay={100}>
            <div className="info-panel"><span>01</span><div><h3>{t('How to use', '使用方法')}</h3>{directions.map((item) => <p key={item}>• {item}</p>)}</div></div>
            <div className="info-panel"><span>02</span><div><h3>{t('Ideal for', '适用场景')}</h3>{idealFor.map((item) => <p key={item}>• {item}</p>)}</div></div>
            <div className="info-panel"><span>03</span><div><h3>{t('Need quantity pricing?', '需要批量价格吗？')}</h3><p>{t('Use the wholesale page to share the product, quantity and location you are interested in.', '你可以通过批发页面告诉我们你感兴趣的产品、数量和地区。')}</p><Link to="/wholesale" className="text-link big">{t('Wholesale enquiry →', '批发咨询 →')}</Link></div></div>
          </Reveal>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading centered"><span className="eyebrow">{t('You may also like', '你可能也会喜欢')}</span><h2>{t('Explore more MINGER products', '查看更多 MINGER 产品')}</h2></div>
          <div className="product-grid three">{related.map((item, index) => <Reveal key={item.slug} delay={index * 80}><ProductCard product={item} /></Reveal>)}</div>
        </div>
      </section>
    </>
  );
}
