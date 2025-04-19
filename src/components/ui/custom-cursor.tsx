
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleLinkHoverStart = () => setIsHovering(true);
    const handleLinkHoverEnd = () => setIsHovering(false);

    const links = document.querySelectorAll('a, button, .cursor-pointer');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart);
      link.addEventListener('mouseleave', handleLinkHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart);
        link.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, []);

  const styles = {
    dot: {
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: isClicking ? 'scale(0.5)' : 'scale(1)',
      opacity: isHidden ? 0 : 1,
    },
    outline: {
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: isClicking ? 'translate(-50%, -50%) scale(0.8)' : 'translate(-50%, -50%) scale(1)',
      opacity: isHidden ? 0 : 0.5,
    },
  };

  return (
    <>
      <div 
        className="fixed w-3 h-3 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isHidden ? 0 : 1,
          transition: 'transform 0.1s ease-out, opacity 0.2s ease-out',
        }}
      />
      <div 
        className={`fixed rounded-full pointer-events-none z-40 border ${isHovering ? 'w-16 h-16 border-accent' : 'w-8 h-8 border-primary'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isHidden ? 0 : 0.6,
          transition: 'width 0.3s ease-out, height 0.3s ease-out, opacity 0.2s ease-out, border-color 0.3s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor;
