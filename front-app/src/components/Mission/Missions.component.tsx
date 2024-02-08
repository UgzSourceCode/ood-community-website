import { Mission } from "./Mission.component.tsx";
import TrainingImage from "../../assets/telework.jpg";
import MentorshipImage from "../../assets/mentorship.jpg";
import CommunityImage from "../../assets/team-spirit.jpg";
import { useTranslation } from "react-i18next";

export const Missions = () => {
    const { t } = useTranslation();

    return (
        <section className="flex flex-col w-full md:justify-center items-center bg-white md:bg-[#CEEDF4] py-12 space-y-10">
            <h2 className="md:uppercase font-bold md:font-light text-2xl md:text-5xl">{t("missions.title")}</h2>
            <Mission id={1} label={t("missions.mentorship")} image={MentorshipImage} alt="Mentorship Image" />
            <Mission id={2} label={t("missions.training")} image={TrainingImage} alt="Training Image" />
            <Mission id={3} label={t("missions.community")} image={CommunityImage} alt="Community Image" />
        </section>
    );
};
