import { TopHeader } from "../../components/TopHeader";
import { Banner } from "../../components/Banner";
import { AboutUs } from "../../components/AboutUs";
import { Missions } from "../../components/Mission";
import { Events } from "../../components/Events";

export const HomeView = () => {
    return (
        <main>
            <Banner />
            <TopHeader />
            <AboutUs />
            <Missions />
            <Events />
        </main>
    );
};
