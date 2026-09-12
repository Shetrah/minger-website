import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { products } from '../data/products';

export default function Products() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'All' | 'Household Care' | 'Personal Care'>('All');
  const shown = useMemo(() => (filter === 'All' ? products : products.filter((product) => product.category === filter)), [filter]);

  const filters = [
    { value: 'All' as const, label: t('All', '全部') },
    { value: 'Household Care' as const, label: t('Household Care', '家居护理') },
    { value: 'Personal Care' as const, label: t('Personal Care', '个人护理') },
  ];

  return (
    <>
      <section className="page-hero products-hero-rich">
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow light">{t('MINGER Products', 'MINGER 产品')}</span>
            <h1>{t('Find the right care for every routine.', '为每一种日常习惯找到合适的护理产品。')}</h1>
            <p>{t('Explore household cleaning and personal-care essentials in a simple, colorful catalogue designed for quick browsing.', '在这个简洁、明快、便于快速浏览的目录中，探索家居清洁与个人护理的核心产品。')}</p>
          </div>
          <img src="/images/product-lineup.png" alt="MINGER product collection" />
        </div>
      </section>

      <section className="section products-browser">
        <div className="container">
          <Reveal><SectionHeading eyebrow={t('Browse the range', '浏览产品系列')} title={t('Household and personal care in one place', '家居清洁与个人护理，一站式查看')} text={t('Filter by category, open a product for more information, or send a product-specific WhatsApp enquiry.', '按品类筛选，打开产品查看更多信息，或直接通过 WhatsApp 发送产品咨询。')} centered /></Reveal>
          <div className="filter-row">
            {filters.map((item) => <button key={item.value} className={filter === item.value ? 'active' : ''} onClick={() => setFilter(item.value)}>{item.label}</button>)}
          </div>
          <div className="product-grid">
            {shown.map((product, index) => <Reveal key={product.slug} delay={index * 80}><ProductCard product={product} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section product-worlds soft-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow={t('Shop by routine', '按使用场景浏览')} title={t('See MINGER in everyday moments', '在日常生活中体验 MINGER')} centered /></Reveal>
          <div className="world-grid">
            <Reveal><div className="world-card"><img src="/images/scene-kitchen.jpg" alt="MINGER kitchen care" /><div><span>{t('Kitchen care', '厨房护理')}</span><h3>{t('Everyday dishwashing', '日常洗碗清洁')}</h3><p>{t('Explore the 5L household pack for kitchen cleaning enquiries.', '了解适用于厨房清洁咨询的 5L 家庭装产品。')}</p></div></div></Reveal>
            <Reveal delay={80}><div className="world-card"><img src="/images/scene-laundry.jpg" alt="MINGER laundry care" /><div><span>{t('Laundry care', '洗衣护理')}</span><h3>{t('Fresh clothes routines', '清新衣物护理')}</h3><p>{t('A family-size 5L format for regular laundry care.', '适合日常洗衣护理的 5L 家庭装规格。')}</p></div></div></Reveal>
            <Reveal delay={160}><div className="world-card"><img src="/images/scene-haircare.jpg" alt="MINGER hair care" /><div><span>{t('Personal care', '个人护理')}</span><h3>{t('Hair-care moments', '洗护秀发时刻')}</h3><p>{t('A bright 500ml shampoo presentation for daily routines.', '明亮吸睛的 500ml 洗发露，适合每日护理。')}</p></div></div></Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
