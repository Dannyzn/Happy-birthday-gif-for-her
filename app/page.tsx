import Link from 'next/link';
import { categories } from '@/data/templates';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 p-4">
      <div className="max-w-md mx-auto pt-12">
        <h1 className="text-3xl font-bold text-center mb-2 text-red-800">
          海外华人文化贺卡
        </h1>
        <p className="text-center text-gray-600 mb-8">
          传递温暖，连接心意
        </p>
        
        <div className="space-y-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/templates/${cat.id}`}
              className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{cat.icon}</span>
                <span className="text-xl font-semibold text-gray-800">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
