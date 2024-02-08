import headerBg from "../../assets/header-bg.jpeg";
import { LinkButton } from "../LinkButton";
import { DISCORD_INVITE_LINK } from "../../consts/external_links.ts";
import { Navbar } from "../Navbar";
import { useTranslation } from "react-i18next";

export const DesktopTop = () => {
    const { t } = useTranslation();

    return (
        <div className="container-relative relative">
            <div
                className="-z-9 fixed-element absolute top-0 bg-black opacity-[0.45] backdrop-filter backdrop-blur-xl"
                style={{
                    height: "-webkit-fill-available",
                    width: "-webkit-fill-available",
                }}
            />
            <img
                src={headerBg}
                alt="header bar backgroound"
                className="-z-10 fixed-element absolute top-0 bg-[#333333] object-cover"
                style={{
                    height: "-webkit-fill-available",
                    width: "-webkit-fill-available",
                }}
            />
            <div className="relative">
                <Navbar />
            </div>
            <div className="w-full flex flex-col items-center justify-center z-10">
                <h1 className="font-montserrat font-bold text-center text-white text-[40px] leading-10 w-[388px] mx-auto mt-20 z-10">
                    {t("community-name.line1")}
                    <br />
                    {t("community-name.line2")}
                </h1>
                <p className="font-montserrat text-white w-[570px] mx-auto text-center mt-5 mb-[45px] z-10">
                    {t("short-description")}
                </p>
                <div className="flex items-center justify-center mb-44 relative z-10">
                    <LinkButton
                        className="flex justify-center items-center bg-[#EC0505] w-[307px] h-[61px] rounded-md text-white font-montserrat font-bold"
                        to={DISCORD_INVITE_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("join-discord")}
                    </LinkButton>
                </div>
            </div>
        </div>
    );
};
