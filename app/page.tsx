'use client';
import Chat from './components/Chat';
import Articles from './components/Articles';
import Newsletter from './components/Newsletter';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <h1 className="text-2xl font-semibold tracking-tight">Navigator</h1>
            {/* Add Accel logo here once you have it */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex gap-8">
            {/* Left side - Chat Interface */}
            <div className="w-[400px] flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[800px] flex flex-col">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Chat</h2>
                </div>
                <Chat />
              </div>
            </div>

            {/* Right side - Articles and Newsletter */}
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Articles</h2>
                </div>
                <div className="p-6">
                  <Articles />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Weekly Updates</h2>
                </div>
                <div className="p-6">
                  <Newsletter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
