import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'zh';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (english: string, chinese: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('minger-language');
    return saved === 'zh' ? 'zh' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('minger-language', language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const setLanguage = (value: Language) => setLanguageState(value);
  const toggleLanguage = () => setLanguageState((current) => (current === 'en' ? 'zh' : 'en'));
  const t = (english: string, chinese: string) => (language === 'zh' ? chinese : english);

  const value = useMemo(() => ({ language, setLanguage, toggleLanguage, t }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
