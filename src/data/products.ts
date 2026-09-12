export type Product = {
  slug: string;
  name: string;
  nameZh: string;
  category: 'Household Care' | 'Personal Care';
  categoryZh: '家居护理' | '个人护理';
  size: string;
  image: string;
  lifestyleImage: string;
  video?: string;
  shortDescription: string;
  shortDescriptionZh: string;
  description: string;
  descriptionZh: string;
  highlights: string[];
  highlightsZh: string[];
  directions: string[];
  directionsZh: string[];
  idealFor: string[];
  idealForZh: string[];
  accent: 'blue' | 'green' | 'pink';
};

export const products: Product[] = [
  {
    slug: 'laundry-detergent',
    name: 'Laundry Detergent',
    nameZh: '洗衣液',
    category: 'Household Care',
    categoryZh: '家居护理',
    size: '5L',
    image: '/images/laundry-detergent.png',
    lifestyleImage: '/images/scene-laundry.jpg',
    video: '/videos/laundry.mp4',
    shortDescription: 'Everyday laundry care with a fresh, clean finish.',
    shortDescriptionZh: '适合日常洗衣护理，带来清新洁净的洗后感。',
    description:
      'MINGER Laundry Detergent is presented as a practical family-size solution for everyday clothes washing, helping make routine laundry simple, fresh and convenient.',
    descriptionZh:
      'MINGER 洗衣液采用实用的家庭装规格，适合日常衣物清洗，让日常洗衣更简单、更清新、更方便。',
    highlights: ['Everyday fabric care', 'Fresh-clean finish', 'Convenient 5L family size'],
    highlightsZh: ['日常衣物护理', '清新洁净洗后感', '便捷 5L 家庭装'],
    directions: [
      'Add the recommended amount to water or the washing machine.',
      'Wash clothes thoroughly.',
      'Rinse well and allow garments to dry normally.',
    ],
    directionsZh: ['按建议用量加入水中或洗衣机中。', '充分清洗衣物。', '彻底漂洗后正常晾干。'],
    idealFor: ['Family laundry routines', 'Homes and apartments', 'Hospitality and institutional enquiries'],
    idealForZh: ['家庭日常洗衣', '住宅与公寓', '酒店及机构采购咨询'],
    accent: 'blue',
  },
  {
    slug: 'dishwashing-liquid',
    name: 'Dishwashing Liquid',
    nameZh: '洗洁精',
    category: 'Household Care',
    categoryZh: '家居护理',
    size: '5L',
    image: '/images/dishwashing-liquid.png',
    lifestyleImage: '/images/scene-kitchen.jpg',
    video: '/videos/dishwashing.mp4',
    shortDescription: 'Reliable dish care for everyday kitchen cleaning.',
    shortDescriptionZh: '可靠的餐具清洁护理，适合日常厨房清洁。',
    description:
      'MINGER Dishwashing Liquid is designed for routine kitchen cleaning and dish care, with a large 5L pack suited to busy homes and business enquiries.',
    descriptionZh:
      'MINGER 洗洁精专为日常厨房清洁和餐具护理设计，5L 大容量适合忙碌家庭及商业采购咨询。',
    highlights: ['For everyday dishes', 'Easy-rinse cleaning', 'Convenient 5L family size'],
    highlightsZh: ['适用于日常洗碗', '易漂洗清洁', '便捷 5L 家庭装'],
    directions: [
      'Apply a small amount to a wet sponge or directly into washing water.',
      'Lather and wash dishes, glasses and utensils.',
      'Rinse thoroughly with clean water.',
    ],
    directionsZh: ['取少量于湿海绵上或直接加入洗涤水中。', '起泡后清洗餐具、杯具和器皿。', '用清水彻底冲洗。'],
    idealFor: ['Home kitchens', 'Restaurants and cafés', 'Hotels, offices and institutions'],
    idealForZh: ['家庭厨房', '餐厅与咖啡馆', '酒店、办公室和机构'],
    accent: 'green',
  },
  {
    slug: 'shampoo',
    name: 'Shampoo',
    nameZh: '洗发露',
    category: 'Personal Care',
    categoryZh: '个人护理',
    size: '500ml',
    image: '/images/shampoo.png',
    lifestyleImage: '/images/scene-haircare.jpg',
    shortDescription: 'A fresh-feeling shampoo for everyday hair routines.',
    shortDescriptionZh: '适合日常秀发护理的清新洗发露。',
    description:
      'MINGER Shampoo is presented as a bright, approachable personal-care product for daily cleansing and a clean, refreshed hair-care routine.',
    descriptionZh:
      'MINGER 洗发露是一款明亮易亲近的个人护理产品，适合日常清洁，让秀发护理更清爽舒适。',
    highlights: ['Daily-use hair care', 'Fresh personal-care identity', 'Convenient 500ml size'],
    highlightsZh: ['日常秀发护理', '清新个人护理形象', '便捷 500ml 规格'],
    directions: [
      'Apply to wet hair.',
      'Massage gently to form lather.',
      'Rinse well with clean water.',
    ],
    directionsZh: ['用于湿发。', '轻轻按摩起泡。', '用清水彻底冲洗。'],
    idealFor: ['Home hair-care routines', 'Salons and care businesses', 'Retail shelf display'],
    idealForZh: ['家庭日常洗护', '沙龙及护理门店', '零售陈列'],
    accent: 'pink',
  },
  {
    slug: 'shower-gel',
    name: 'Shower Gel',
    nameZh: '沐浴露',
    category: 'Personal Care',
    categoryZh: '个人护理',
    size: '500ml',
    image: '/images/shower-gel.png',
    lifestyleImage: '/images/scene-shower.jpg',
    video: '/videos/shower-gel.mp4',
    shortDescription: 'Refreshing body care for a bright daily shower ritual.',
    shortDescriptionZh: '清爽身体护理，为每日沐浴带来明亮舒适体验。',
    description:
      'MINGER Shower Gel is positioned as an uplifting everyday body-care product, designed for refreshing shower moments and a clean, energetic look on the shelf.',
    descriptionZh:
      'MINGER 沐浴露定位为日常提神身体护理产品，适合清爽沐浴时刻，并在货架上呈现洁净活力形象。',
    highlights: ['Refreshing daily body care', 'Clean uplifting presentation', 'Convenient 500ml size'],
    highlightsZh: ['清爽日常身体护理', '洁净活力形象', '便捷 500ml 规格'],
    directions: ['Apply to wet skin or a sponge.', 'Lather gently over the body.', 'Rinse thoroughly with clean water.'],
    directionsZh: ['用于湿润肌肤或海绵。', '轻柔起泡并清洁全身。', '用清水彻底冲洗。'],
    idealFor: ['Daily shower routines', 'Hospitality and guest amenities', 'Retail personal-care sections'],
    idealForZh: ['日常沐浴护理', '酒店及客用品', '零售个人护理专区'],
    accent: 'blue',
  },
];
