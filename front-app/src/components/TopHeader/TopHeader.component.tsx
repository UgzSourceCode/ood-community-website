import { isMobileHook } from '../../hooks/isMobileHook.ts';
import { MobileTop } from './MobileTop.component.tsx';
import { DesktopTop } from './DesktopTop.component.tsx';

export const TopHeader = () => {
  const isMobile = isMobileHook();

  return (
    <div id="TopHeader">
      {isMobile ? <MobileTop /> : <DesktopTop />}
    </div>);
};