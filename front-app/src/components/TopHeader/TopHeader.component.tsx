import { useIsMobileHook } from "../../hooks/useIsMobileHook.ts";
import { MobileTop } from "./MobileTop.component.tsx";
import { DesktopTop } from "./DesktopTop.component.tsx";

export const TopHeader = () => {
    const isMobile = useIsMobileHook();

    return <div id="TopHeader">{isMobile ? <MobileTop /> : <DesktopTop />}</div>;
};
