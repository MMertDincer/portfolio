// components/Line.js
const Line = ({ position, isHorizontal }) => {
  // Kare boyutunu belirleme (grid aralığına göre)
  const gridSize = 80; // Karelerin boyutuna göre ayarlayın
  const randomDuration = Math.random() * 3 + 2; // 2 ile 5 saniye arasında rastgele animasyon süresi

  const style = isHorizontal
    ? { top: `${position * gridSize}px`, width: '10%', height: '1px', animationDuration: `${randomDuration}s`, animationName: 'moveHorizontal' }
    : { left: `${position * gridSize}px`, height: '10%', width: '1px', animationDuration: `${randomDuration}s`, animationName: 'moveVertical' };

  return <div className={`line ${isHorizontal ? 'horizontal' : 'vertical'}`} style={style}></div>;
};

export default Line;
