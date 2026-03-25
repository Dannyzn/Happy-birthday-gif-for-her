import { NextRequest, NextResponse } from 'next/server';

const messages: Record<string, string[]> = {
  'spring-festival': [
    '恭贺新禧，万事如意！愿新的一年里，福星高照，心想事成。',
    '新春佳节，祝您阖家欢乐，幸福安康，龙年大吉！',
    '春回大地，万象更新。祝您新年快乐，事业蒸蒸日上！'
  ],
  'mid-autumn': [
    '月圆人团圆，祝您中秋快乐，阖家幸福安康！',
    '明月寄相思，千里共婵娟。中秋佳节，愿您合家团圆！',
    '秋风送爽，月满中秋。祝您节日快乐，万事顺意！'
  ],
  'dragon-boat': [
    '端午安康，愿您粽享美好时光，平安喜乐！',
    '龙舟竞渡，粽叶飘香。祝您端午节快乐，身体健康！',
    '五月初五，端午佳节。愿您阖家安康，幸福美满！'
  ]
};

export async function POST(req: NextRequest) {
  try {
    const { category } = await req.json();
    const options = messages[category] || messages['spring-festival'];
    const message = options[Math.floor(Math.random() * options.length)];
    
    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
