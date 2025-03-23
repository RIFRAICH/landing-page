import style from "../styles/pages/Home.module.scss";
import MainDesktop from "../components/main/MainDesktop";
import useIsTablet from "../hooks/useIsTablet";
import MainMobile from "../components/main/MainMobile";

function HomePage(){
    const isTablet = useIsTablet();

    return (
        <>
            {isTablet ? <MainMobile /> : <MainDesktop />}
        </>
    );
}

export default HomePage;
