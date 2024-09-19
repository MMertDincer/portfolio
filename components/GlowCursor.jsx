// components/GlowCursor.jsx
'use client';
import { useEffect, useState } from 'react';
import '../app/globals.css'; // Stil dosyasını içeri aktarın

const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursorGlow"
      style={{ transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)` }}
    />
  );
};

export default GlowCursor;
