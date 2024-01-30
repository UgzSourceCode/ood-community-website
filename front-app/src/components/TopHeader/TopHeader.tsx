import { isMobileHook } from '../../hooks/isMobileHook.ts';

export const TopHeader = () => {
  const isMobile = isMobileHook();

  return isMobile? <p>mobile</p> : <p>desktop</p>;
};