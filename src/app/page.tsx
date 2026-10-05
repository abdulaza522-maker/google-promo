'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white">
        <div className="text-center animate-pulse">
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
            width={272}
            height={92}
            className="mx-auto mb-4"
            priority
          />
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Promosi Spesial
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <header className="flex items-center justify-between border-b border-gray-100 px-8 py-4">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          width={110}
          height={37}
        />
        <button className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          Mulai Sekarang
        </button>
      </header>

      <main>
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Inovasi Google untuk Masa Depan
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Jelajahi ekosistem digital terbaik yang dirancang untuk mendukung
            produktivitas dan kreativitas Anda tanpa batas.
          </p>
          <div className="my-8">
            <Hero3D />
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50 py-16">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 text-center sm:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-bold text-blue-600">Google Cloud</h2>
              <p className="text-sm text-gray-600">
                Infrastruktur aman dan terintegrasi berbasis AI modern.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-bold text-red-500">Google Workspace</h2>
              <p className="text-sm text-gray-600">
                Kolaborasi tanpa batas untuk tim dan bisnis Anda.
              </p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-bold text-yellow-500">Google AI</h2>
              <p className="text-sm text-gray-600">
                Teknologi kecerdasan buatan terdepan untuk efisiensi tinggi.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
