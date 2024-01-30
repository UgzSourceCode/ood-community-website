import { useEffect, useState } from 'react';
import { breakpoint } from '../consts/screen.ts';

export const isMobileHook = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>();

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenWidth && screenWidth < breakpoint;
};