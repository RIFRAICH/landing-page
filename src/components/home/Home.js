import './Home.css';
import BlueButton from "../blue-button/BlueButton";

function Home(){
    return (
        <section className="home"
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/home_bg.png'})`,
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover'
                 }}>
            <p className="home__text">Second step for second life</p>
            <p className="home__title">Des vêtements d'occasion qui n'ont rien à envier au neuf.</p>
            <section className="home__description">
                <p className="home__text">RIFRAICH redéfinit la seconde main. Découvre des vêtements d'occasion triés
                    sur le volet, pour une qualité premium et une expérience d'achat comme neuve.</p>
                <p className="home__text">Pièces uniques, marques premium, garanties impeccables.</p>
                <p className="home__text">Shoppe la mode durable sans compromis sur le style.</p>
            </section>
            <BlueButton link="#" label="S'inscrire à la newsletter"/>
        </section>
    );
}

export default Home;