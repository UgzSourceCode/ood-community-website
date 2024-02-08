import { useTranslation } from "react-i18next";

export const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col py-12 bg-white">
            <section
                id="about-us"
                className="flex flex-col max-w-2xl justify-center items-center self-center space-y-4 px-4"
            >
                <h2 className="text-3xl md:text-6xl tracking-wide md:font-light uppercase">{t("menu.about-us")}</h2>
                <p className="hidden md:inline-block text-4xl font-bold">{t("about-us.header")}</p>
                <p className="sm:text-sm md:text-xl tracking-wide text-center space-y-4">{t("about-us.description")}</p>
            </section>
        </div>
    );
};
