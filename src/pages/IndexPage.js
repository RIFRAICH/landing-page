import Home from "../components/pages/home/Home";
import Footer from "../components/pages/footer/Footer";
import HeaderV2 from "../components/pages/headerV2/HeaderV2";
import AnimatedBanner from "../components/animated-banner/AnimatedBanner";
import About from "../components/pages/about/About";
import Engagement from "../components/pages/engagement/engagement";
import Ready from "../components/pages/ready/Ready";
import Contact from "../components/pages/contact/Contact";

function IndexPage(){
    return (
        <>
            <HeaderV2 />
            <Home />
            <AnimatedBanner color="black" angle={-5} />
            <AnimatedBanner color="white" angle={5} />
            <About />
            <Engagement />
            <Ready />
            <Contact />
            <Footer />
        </>
    );
}

export default IndexPage;
