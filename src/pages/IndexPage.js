import Home from "../components/pages/home/Home";
import Concept from "../components/pages/concept/Concept";
import Why from "../components/pages/why/Why";
import Contact from "../components/pages/contact/Contact";
import Footer from "../components/pages/footer/Footer";
import HowToWork from "../components/pages/howtowork/HowToWork";
import HeaderV2 from "../components/pages/headerV2/HeaderV2";
import AnimatedBanner from "../components/animated-banner/AnimatedBanner";
import About from "../components/pages/about/About";
import Engagement from "../components/pages/engagement/Engagement";

function IndexPage(){
    return (
        <>
            <HeaderV2 />
            <Home />
            <Engagement />
            <AnimatedBanner color="black" angle={-5} />
            <AnimatedBanner color="white" angle={5} />
            <About />
            <Concept />
            <HowToWork />
            <Why />
            <Contact />
            <Footer />
        </>
    );
}

export default IndexPage;
