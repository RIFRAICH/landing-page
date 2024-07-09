import Header from "../components/pages/header/Header";
import Home from "../components/pages/home/Home";
import Concept from "../components/pages/concept/Concept";
import Why from "../components/pages/why/Why";
import Contact from "../components/pages/contact/Contact";
import Footer from "../components/pages/footer/Footer";
import HowToWork from "../components/pages/howtowork/HowToWork";

function IndexPage(){
    return (
        <>
            <Header />
            <Home />
            <Concept />
            <HowToWork />
            <Why />
            <Contact />
            <Footer />
        </>
    );
}

export default IndexPage;