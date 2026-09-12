import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="section not-found-block">
      <div className="container centered-copy">
        <span className="eyebrow">404</span>
        <h1>{t('Page not found', '页面未找到')}</h1>
        <p>{t('The page you are looking for does not exist or may have been moved.', '你访问的页面不存在，或者已被移动。')}</p>
        <Link to="/" className="btn btn-primary">{t('Back to homepage', '返回首页')}</Link>
      </div>
    </section>
  );
}
