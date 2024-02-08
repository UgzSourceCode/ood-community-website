import { TopHeader } from "../../components/TopHeader";
import { Banner } from "../../components/Banner";
import {AboutUs} from "../../components/AboutUs";

export const HomeView = () => {
    return (
        <main>
            <Banner />
            <TopHeader />
            <AboutUs />
        </main>
    );
};
