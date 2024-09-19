"use client"
import { useEffect, useState } from 'react';

const Typewriter = ({ texts }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      let updatedText = displayedText;

      if (isDeleting) {
        updatedText = currentText.substring(0, displayedText.length - 1);
      } else {
        updatedText = currentText.substring(0, displayedText.length + 1);
      }

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingDelay = isDeleting ? deletingSpeed : typingSpeed;
    const typingTimer = setTimeout(handleTyping, typingDelay);

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, textIndex, texts]);

  return (
    <div className="inline-flex items-center whitespace-pre">
      <span>{displayedText}</span>
      <span className="ml-1 w-1 bg-white h-6 cursor-blink"></span>
    </div>
  );
};

export default Typewriter;
