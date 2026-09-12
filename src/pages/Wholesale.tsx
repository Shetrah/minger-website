import { FormEvent, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { company, whatsappUrl } from '../data/company';

export default function Wholesale() {
  const [sent, setSent] = useState(false);
  const { language, t } = useLanguage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = language === 'zh'
      ? ['您好，MINGER，我想进行批发/经销咨询。', `姓名: ${data.get('name')}`, `公司/机构: ${data.get('business')}`, `所在地: ${data.get('location')}`, `电话: ${data.get('phone')}`, `产品/数量: ${data.get('interest')}`].join('\n')
      : ['Hello MINGER, I would like to make a wholesale/distributor enquiry.', `Name: ${data.get('name')}`, `Business: ${data.get('business')}`, `Location: ${data.get('location')}`, `Phone: ${data.get('phone')}`, `Products / quantities: ${data.get('interest')}`].join('\n');
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <>
      <section className="page-hero wholesale-hero">
        <div className="container page-hero-grid">
          <div><span className="eyebrow light">{t('Wholesale & Distribution', '批发与经销')}</span><h1>{t('Bring MINGER to your shelves and customers.', '让 MINGER 走进你的货架和客户生活。')}</h1><p>{t('Start a conversation about bulk quantities, stocking opportunities and supply for business or institutional use.', '立即开始沟通批量采购、铺货合作以及企业或机构使用的供货需求。')}</p></div>
          <img src="/images/dishwashing-front-back.png" alt="MINGER 5L product packs" />
        </div>
      </section>

      <section className="section">
        <div className="container wholesale-grid">
          <Reveal className="wholesale-copy">
            <span className="eyebrow">{t('Business enquiries', '商业咨询')}</span><h2>{t('Tell us what you need', '告诉我们你的需求')}</h2><p>{t('Suitable for supermarkets, shops, wholesalers, salons, hotels, restaurants, institutions and other businesses interested in the MINGER range.', '适用于超市、商店、批发商、沙龙、酒店、餐厅、机构及其他对 MINGER 产品感兴趣的企业。')}</p>
            <div className="wholesale-points"><div><strong>{t('Retail', '零售')}</strong><span>{t('Product availability and stocking discussions', '产品供应与上架沟通')}</span></div><div><strong>{t('Wholesale', '批发')}</strong><span>{t('Bulk quantity enquiries across the product range', '整套产品的批量采购咨询')}</span></div><div><strong>{t('Distribution', '经销')}</strong><span>{t('Territory, reseller and supply conversations', '区域经销、分销和供货合作')}</span></div><div><strong>{t('Hospitality & institutions', '酒店与机构')}</strong><span>{t('Product and quantity enquiries for operational use', '用于日常运营的产品与数量咨询')}</span></div></div>
            <div className="contact-chip">{t('Direct contact', '直接联系')}: {company.phone}</div>
          </Reveal>

          <Reveal delay={100}>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <h3>{t('Wholesale enquiry', '批发咨询表')}</h3>
              <label>{t('Full name', '姓名')}<input name="name" required placeholder={t('Your name', '你的姓名')} /></label>
              <label>{t('Business / organization', '公司 / 机构')}<input name="business" required placeholder={t('Business name', '公司名称')} /></label>
              <div className="form-row"><label>{t('Location', '所在地')}<input name="location" required placeholder={t('Town / county', '城市 / 地区')} /></label><label>{t('Phone', '电话')}<input name="phone" required placeholder={t('Phone number', '电话号码')} /></label></div>
              <label>{t('Products and estimated quantities', '产品与预估数量')}<textarea name="interest" rows={5} required placeholder={t('Example: 20 × 5L Dishwashing Liquid', '例如：20 × 5L 洗洁精')} /></label>
              <button className="btn btn-whatsapp full" type="submit">{t('Continue on WhatsApp', '在 WhatsApp 中继续')}</button>
              {sent && <p className="form-hint success">{t('WhatsApp should now be open with your enquiry pre-filled.', 'WhatsApp 已打开，并自动填好你的咨询内容。')}</p>}
              <p className="form-hint">{t('This form does not store customer data. It prepares your message and opens WhatsApp.', '此表单不会存储客户数据，它只会生成信息并打开 WhatsApp。')}</p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section partner-section soft-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow={t('Who can enquire?', '谁可以咨询？')} title={t('Built for different kinds of buyers', '为不同类型的采购客户而设计')} centered /></Reveal>
          <div className="partner-grid">{[[t('🛒', '🛒'),t('Retail shops', '零售门店'),t('Stock individual products for walk-in customers.', '为到店顾客储备单品。')],[t('🏪', '🏪'),t('Supermarkets', '超市'),t('Discuss broader shelf placement and quantities.', '沟通更广泛的货架陈列与采购数量。')],[t('🏨', '🏨'),t('Hospitality', '酒店行业'),t('Ask about cleaning and personal-care supply needs.', '咨询清洁与个人护理用品的供货需求。')],[t('💇', '💇'),t('Salons & care businesses', '沙龙与护理门店'),t('Enquire about shampoo and personal-care stock.', '咨询洗发露与个人护理类备货。')],[t('🏢', '🏢'),t('Institutions', '机构客户'),t('Discuss routine supply requirements.', '沟通日常供货需求。')],[t('🚚', '🚚'),t('Distributors', '经销商'),t('Start a conversation about resale and distribution.', '开启转售与经销合作洽谈。')]].map(([icon,title,text], index) => <Reveal key={String(title)} delay={index*60}><article><span>{icon}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
        </div>
      </section>
    </>
  );
}
