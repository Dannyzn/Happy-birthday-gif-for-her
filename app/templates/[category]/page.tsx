'use client';

import { useParams, useRouter } from 'next/navigation';
import { templates, categories } from '@/data/templates';
import Image from 'next/image';

export default function TemplatesPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as string;
  
  const category = categories.find(c => c.id === categoryId);
  const categoryTemplates = templates.filter(t => t.category === categoryId);

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <button 
          onClick={() => router.back()}
          className="mb-4 text-red-600 hover:text-red-800"
        >
          ← 返回
        </button>
        
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          {category?.icon} {category?.name}贺卡
        </h1>
        
        <div className="grid grid-cols-2 gap-4">
          {categoryTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => router.push(`/editor/${template.id}`)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                <span className="text-4xl">{category?.icon}</span>
              </div>
              <div className="p-3">
                <p className="font-medium text-gray-800">{template.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
