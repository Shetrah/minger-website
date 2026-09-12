import { FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { company, whatsappUrl } from '../data/company';

export default function Contact() {
  const { language, t } = useLanguage();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = language === 'zh'
      ? ['您好，MINGER，我有一个网站咨询。', `姓名: ${data.get('name')}`, `电话: ${data.get('phone')}`, `信息: ${data.get('message')}`].join('\n')
      : ['Hello MINGER, I have a website enquiry.', `Name: ${data.get('name')}`, `Phone: ${data.get('phone')}`, `Message: ${data.get('message')}`].join('\n');
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section className="page-hero contact-hero-rich">
        <div className="container page-hero-grid">
          <div><span className="eyebrow light">{t('Contact MINGER', '联系 MINGER')}</span><h1>{t('Questions, orders or business enquiries? Start here.', '有疑问、下单需求或商业合作？从这里开始。')}</h1><p>{t('Reach the team by phone, email or WhatsApp and tell us what product or opportunity you are interested in.', '通过电话、邮箱或 WhatsApp 联系团队，告诉我们你感兴趣的产品或合作机会。')}</p></div>
          <img src="/images/product-lineup.png" alt="MINGER products" />
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-card-stack">
            <div className="contact-card"><span>{t('Phone', '电话')}</span><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></div>
            <div className="contact-card"><span>{t('Email', '邮箱')}</span><a href={`mailto:${company.email}`}>{company.email}</a></div>
            <div className="contact-card"><span>{t('Location', '地址')}</span><strong>{language === 'zh' ? company.locationZh : company.location}</strong></div>
            <div className="contact-card"><span>{t('Company', '公司')}</span><strong>{language === 'zh' ? company.legalNameZh : company.legalName}</strong></div>
            <a className="contact-visual-card" href={whatsappUrl(language === 'zh' ? '您好，MINGER，我想咨询贵公司的产品。' : 'Hello MINGER, I would like to make an enquiry.')} target="_blank" rel="noreferrer"><img src="/images/scene-kitchen.jpg" alt="MINGER customer care" /><div><span>{t('Fastest way to reach us', '最快速的联系方式')}</span><strong>{t('Chat on WhatsApp →', '通过 WhatsApp 联系 →')}</strong></div></a>
          </Reveal>

          <Reveal delay={100}>
            <form className="enquiry-form" onSubmit={submit}>
              <h3>{t('Send a quick enquiry', '发送快速咨询')}</h3>
              <label>{t('Full name', '姓名')}<input name="name" required placeholder={t('Your name', '你的姓名')} /></label>
              <label>{t('Phone number', '电话号码')}<input name="phone" required placeholder={t('Your phone number', '你的电话号码')} /></label>
              <label>{t('Message', '信息内容')}<textarea name="message" rows={6} required placeholder={t('Which product or opportunity would you like to discuss?', '你想咨询哪个产品或哪种合作机会？')} /></label>
              <button type="submit" className="btn btn-whatsapp full">{t('Send via WhatsApp', '通过 WhatsApp 发送')}</button>
              <p className="form-hint">{t('Your message is prepared in the browser and sent through WhatsApp; this website does not store it.', '你的信息会在浏览器中生成并通过 WhatsApp 发送；本网站不会存储内容。')}</p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container"><Reveal><SectionHeading eyebrow={t('Before you message', '联系前建议准备')} title={t('Helpful details to include', '建议补充的信息')} centered /></Reveal><div className="contact-help-grid">{[t('Product name and size', '产品名称与规格'),t('Approximate quantity', '预估数量'),t('Your town or delivery area', '你的城市或送货区域'),t('Whether it is retail, wholesale or business use', '是零售、批发还是商业用途')].map((item,index)=><Reveal key={item} delay={index*70}><div><b>{index+1}</b><span>{item}</span></div></Reveal>)}</div></div>
      </section>
    </>
  );
}
