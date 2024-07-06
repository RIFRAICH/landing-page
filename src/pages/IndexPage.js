import Header from "../components/pages/header/Header";
import Home from "../components/pages/home/Home";
import Concept from "../components/pages/concept/Concept";
import Why from "../components/pages/why/Why";
import Contact from "../components/pages/contact/Contact";

function IndexPage(){
    return (
        <>
            <Header />
            <Home />
            <Concept />
            <Why />
            <Contact />
        </>
    );
}

export default IndexPage;