import { ABOUT, CONTACT, EVENTS, HOME } from "../../routes/consts.ts";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import { LinkButton } from "../LinkButton";
import { DISCORD_INVITE_LINK } from "../../consts/external_links.ts";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const { t } = useTranslation();

    return (
        <>
            <header className="lg:pl-[49px] w-full bg-transparent">
                <nav className="nav py-4 pl-5 flex flex-col md:flex-row justify-around items-center">
                    <div>
                        <Link to={HOME}>
                            <Logo size={60} />
                        </Link>
                    </div>
                    <div>
                        <ul className="font-montserrat text-base text-white flex flex-row justify-between items-center md:space-x-[30px]">
                            <Link to={ABOUT}>
                                <li>{t("menu.about-us")}</li>
                            </Link>
                            <Link to={EVENTS}>
                                <li>{t("menu.events")}</li>
                            </Link>
                            <Link to={CONTACT}>
                                <li>{t("menu.contact")}</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <LinkButton
                            className="flex justify-center items-center bg-[#EC0505] w-[203px] h-[46px] rounded-md text-base text-white font-montserrat font-bold"
                            to={DISCORD_INVITE_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("join-discord")}
                        </LinkButton>
                    </div>
                </nav>
            </header>
        </>
    );
};
