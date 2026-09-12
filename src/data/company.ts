export const company = {
  brand: 'MINGER',
  legalName: 'Enchanted Oasis Atelier Limited',
  legalNameZh: '魔净日常生活用品有限公司',
  tagline: 'Premium Cleaning & Personal Care Solutions',
  taglineZh: '高端清洁与个人护理解决方案',
  shortTagline: 'Clean today. Feel fresh every day.',
  shortTaglineZh: '今日洁净，日日清新。',
  location: 'Ongata Rongai, Kenya',
  locationZh: '肯尼亚 翁加塔荣盖',
  phone: '+254 118 188 888',
  email: 'zming7031@gmail.com',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '254118188888',
  aboutSummary:
    'MINGER brings together practical household cleaning products and refreshing personal care essentials under one bright, easy-to-recognize brand family for homes, retailers and growing businesses.',
  aboutSummaryZh:
    'MINGER 将实用家居清洁产品与清新个人护理用品整合为一个明亮、易识别的品牌系列，服务于家庭、零售商及不断发展的企业。',
  socials: {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
  },
};

export const whatsappUrl = (message: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
