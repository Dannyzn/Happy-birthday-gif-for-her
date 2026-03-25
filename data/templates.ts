import { Category, Template } from '@/types';

export const categories: Category[] = [
  { id: 'spring-festival', name: '春节', icon: '🧧' },
  { id: 'mid-autumn', name: '中秋', icon: '🥮' },
  { id: 'dragon-boat', name: '端午', icon: '🐉' },
];

export const templates: Template[] = [
  {
    id: 'sf-1',
    name: '春节祝福',
    category: 'spring-festival',
    imageUrl: '/templates/spring-festival-1.jpg',
    textArea: { x: 50, y: 200, width: 300, height: 200 }
  },
  {
    id: 'sf-2',
    name: '新春快乐',
    category: 'spring-festival',
    imageUrl: '/templates/spring-festival-2.jpg',
    textArea: { x: 50, y: 180, width: 300, height: 220 }
  },
  {
    id: 'ma-1',
    name: '中秋团圆',
    category: 'mid-autumn',
    imageUrl: '/templates/mid-autumn-1.jpg',
    textArea: { x: 60, y: 200, width: 280, height: 200 }
  },
  {
    id: 'ma-2',
    name: '月圆人圆',
    category: 'mid-autumn',
    imageUrl: '/templates/mid-autumn-2.jpg',
    textArea: { x: 50, y: 190, width: 300, height: 210 }
  },
  {
    id: 'db-1',
    name: '端午安康',
    category: 'dragon-boat',
    imageUrl: '/templates/dragon-boat-1.jpg',
    textArea: { x: 50, y: 200, width: 300, height: 200 }
  },
];

export const defaultMessages: Record<string, string> = {
  'spring-festival': '恭贺新禧，万事如意！愿新的一年里，福星高照，心想事成。',
  'mid-autumn': '月圆人团圆，祝您中秋快乐，阖家幸福安康！',
  'dragon-boat': '端午安康，愿您粽享美好时光，平安喜乐！',
};
