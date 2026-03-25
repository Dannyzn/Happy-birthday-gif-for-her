'use client';

import { useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { templates, defaultMessages } from '@/data/templates';

export default function EditorPage() {
  const params = useParams();
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const templateId = params.id as string;
  const template = templates.find(t => t.id === templateId);
  
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState(defaultMessages[template?.category || ''] || '');
  const [sender, setSender] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const generateAI = async () => {
    setAiLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: template?.category, tone: 'formal' })
      });
      const data = await res.json();
      if (data.message) setMessage(data.message);
    } catch (error) {
      alert('AI 生成失败，请手动填写');
    }
    setAiLoading(false);
  };

  const downloadCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 600;

    ctx.fillStyle = '#fef3c7';
    ctx.fillRect(0, 0, 400, 600);

    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 20px Arial';
    ctx.fillText(`致 ${recipient}`, 50, 100);
    
    ctx.font = '16px Arial';
    const lines = message.split('\n');
    lines.forEach((line, i) => {
      ctx.fillText(line, 50, 150 + i * 30);
    });
    
    ctx.font = 'italic 18px Arial';
    ctx.fillText(`—— ${sender}`, 250, 500);

    const link = document.createElement('a');
    link.download = 'greeting-card.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  if (!template) return <div>模板未找到</div>;

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 p-4">
      <div className="max-w-md mx-auto pt-8">
        <button onClick={() => router.back()} className="mb-4 text-red-600">
          ← 返回
        </button>
        
        <h1 className="text-2xl font-bold mb-6 text-gray-800">编辑贺卡</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">收件人</label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="例如：妈妈"
              className="w-full px-3 py-2 border rounded-lg"
              maxLength={20}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">祝福语</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="输入祝福语..."
              className="w-full px-3 py-2 border rounded-lg h-32"
              maxLength={200}
            />
            <button
              onClick={generateAI}
              disabled={aiLoading}
              className="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              {aiLoading ? '生成中...' : '✨ AI 生成祝福语'}
            </button>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">署名</label>
            <input
              type="text"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              placeholder="例如：小明"
              className="w-full px-3 py-2 border rounded-lg"
              maxLength={20}
            />
          </div>
          
          <button
            onClick={downloadCard}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
          >
            生成并下载贺卡
          </button>
        </div>
        
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </main>
  );
}

  if (!template) return <div>模板不存在</div>;

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto pt-8">
        <button onClick={() => router.back()} className="mb-4 text-blue-600">
          ← 返回
        </button>

        <h1 className="text-2xl font-bold mb-6">{template.name}</h1>

        <div className="space-y-4 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium mb-1">收件人</label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="例如：妈妈"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">祝福语</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              maxLength={200}
              className="w-full border rounded px-3 py-2"
            />
            <div className="text-xs text-gray-500 mt-1">{message.length}/200</div>
          </div>

          <button
            onClick={generateAI}
            disabled={aiLoading}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 disabled:bg-gray-400"
          >
            {aiLoading ? '生成中...' : '✨ AI 生成祝福语'}
          </button>

          <div>
            <label className="block text-sm font-medium mb-1">署名</label>
            <input
              type="text"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              placeholder="例如：小明"
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            onClick={downloadCard}
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 font-semibold"
          >
            生成并下载贺卡
          </button>
        </div>

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </main>
  );
}
