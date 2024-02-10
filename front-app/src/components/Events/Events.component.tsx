import { events } from "./Events.consts.ts";
import { EventTile } from "./EventTile.component.tsx";
import { useTranslation } from "react-i18next";

export const Events = () => {
    const { t } = useTranslation();

    return (
        <section
            id="events"
            className="relative flex flex-col items-center justify-center w-full py-16 bg-white md:py-20 gap-y-2 md:gap-y-5"
        >
            <h2 className="flex items-center justify-center font-light tracking-wide">{t("events.title")}</h2>
            <h2 className="pb-2 text-2xl font-bold md:pb-10">{t("events.subtitle")}</h2>
            <div className="grid grid-cols-1 gap-y-4 md:gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8 md:grid-cols-2 bg-[#09AFC6] px-4 md:px-10 lg:px-16 py-8 md:py-14 xl:py-16">
                {events.map((event) => (
                    <EventTile
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        image={event.image}
                        description={event.description}
                        target={event.target}
                    />
                ))}
            </div>
        </section>
    );
};
