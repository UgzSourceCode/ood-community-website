import { TopHeader } from "../../components/TopHeader";
import { Banner } from "../../components/Banner";
import { AboutUs } from "../../components/AboutUs";
import { Missions } from "../../components/Mission";

export const HomeView = () => {
    return (
        <main>
            <Banner />
            <TopHeader />
            <AboutUs />
            <Missions />
        </main>
    );
};
