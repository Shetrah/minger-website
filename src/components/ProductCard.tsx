import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Product } from '../data/products';
import { whatsappUrl } from '../data/company';

export default function ProductCard({ product }: { product: Product }) {
  const { language, t } = useLanguage();
  const name = language === 'zh' ? product.nameZh : product.name;
  const category = language === 'zh' ? product.categoryZh : product.category;
  const description = language === 'zh' ? product.shortDescriptionZh : product.shortDescription;

  return (
    <article className={`product-card accent-${product.accent}`}>
      <div className="product-image-wrap">
        <span className="pill">{category}</span>
        <img src={product.image} alt={`${name} ${product.size}`} loading="lazy" />
      </div>
      <div className="product-card-body">
        <div className="product-heading-row">
          <h3>{name}</h3>
          <span className="size-chip">{product.size}</span>
        </div>
        <p>{description}</p>
        <div className="card-actions">
          <Link className="text-link" to={`/products/${product.slug}`}>
            {t('View details →', '查看详情 →')}
          </Link>
          <a
            className="btn btn-soft btn-sm"
            href={whatsappUrl(language === 'zh' ? `您好，MINGER，我对 ${product.nameZh}（${product.size}）感兴趣。` : `Hello MINGER, I am interested in ${product.name} (${product.size}).`)}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
