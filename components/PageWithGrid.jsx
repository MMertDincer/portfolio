"use client"
import { useEffect } from 'react';
import Line from './Line';

const PageWithGrid = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const gridElement = document.querySelector('.grid-background::before');
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / maxScroll;

      if (gridElement) {
        gridElement.style.opacity = 1 - scrollPercent; // Sayfa aşağı indikçe opacity azalır
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 // Sabit pozisyonlar belirleyin
 const lines = [
  { position: 3, isHorizontal: true },
  { position: 3, isHorizontal: false },
  { position: 22, isHorizontal: false },
  { position: 9, isHorizontal: true }
];

  return (
    <div className="relative h-screen w-full">
      <div className="grid-background absolute inset-0 z-[-1]"></div>
      {/* Karelerin çizgileri boyunca hareket eden kısa çizgiler */}
      {lines.map((line, i) => (
        <Line key={i} position={line.position} isHorizontal={line.isHorizontal} />
      ))}
      {/* Sayfa içeriği buraya gelecek */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageWithGrid;
