'use client';
import { useState, useEffect } from 'react';

interface Article {
  id: string;
  title: string;
  sector: string;
  goal: string;
  summary?: string;
}

export default function Articles() {
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [selectedGoal, setSelectedGoal] = useState<string>('all');
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string>('');

  const sectors = ['All', 'Fintech', 'AI/ML', 'SaaS', 'Healthcare'];
  const goals = ['All', 'Investment', 'Learning', 'Market Research'];

  useEffect(() => {
    fetchArticles();
  }, [selectedSector, selectedGoal]);

  const fetchArticles = async () => {
    try {
      setError('');
      const params = new URLSearchParams();
      if (selectedSector !== 'all') params.append('sector', selectedSector);
      if (selectedGoal !== 'all') params.append('goal', selectedGoal);

      const response = await fetch(`/api/articles?${params}`);
      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error || 'Failed to fetch articles');
        return;
      }

      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError('Failed to fetch articles. Please try again.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <select
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors text-base min-w-[160px]"
        >
          {sectors.map((sector) => (
            <option key={sector} value={sector.toLowerCase()}>
              {sector}
            </option>
          ))}
        </select>

        <select
          value={selectedGoal}
          onChange={(e) => setSelectedGoal(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-gray-300 transition-colors text-base min-w-[160px]"
        >
          {goals.map((goal) => (
            <option key={goal} value={goal.toLowerCase()}>
              {goal}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 rounded-xl p-4">
          {error}
        </div>
      )}

      <div className="space-y-6">
        {articles.length === 0 && !error ? (
          <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-xl">
            No articles found. Articles will appear here.
          </div>
        ) : (
          articles.map((article) => (
            <div
              key={article.id}
              className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-900">{article.title}</h3>
              <div className="flex gap-2 mt-4">
                <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  {article.sector}
                </span>
                <span className="px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                  {article.goal}
                </span>
              </div>
              {article.summary && (
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {article.summary}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
