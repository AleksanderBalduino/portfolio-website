/* Components */
import { Home } from "../../components/Home.tsx";
import { About } from "../../components/About.tsx";
import { Services } from "../../components/Services.tsx";
import { Work } from "../../components/Work.tsx";
import { Cta } from "../../components/Cta.tsx";
import PageTransition from "../../components/Animations/PageTransition.tsx";

export function HomePage() {
    return (
        <PageTransition>
            <Home />
            <About />
            <Services />
            <Work />
            <Cta />
        </PageTransition>
    );
}