import './HowToWork.css';
import htw1 from '../../../assets/img/htw1.png';
import htw2 from '../../../assets/img/htw2.png';
import htw3 from '../../../assets/img/htw3.png';
import htw4 from '../../../assets/img/htw4.png';
import arrow1 from '../../../assets/img/arrow1.svg';
import arrow2 from '../../../assets/img/arrow2.svg';
import arrow3 from '../../../assets/img/arrow3.svg';
import arrow4 from '../../../assets/img/arrow4.svg';

function HowToWork() {
  return (
      <section id="howtowork" className="howtowork">
          <section className="howtowork__globaltitle">
              <section className="howtowork__subglobaltitle">
                  <p className="howtowork__description">Chez RIFRAICH, nous donnons une nouvelle vie aux vêtements</p>
                  <h2 className="howtowork__title">Comment ça marche ?</h2>
              </section>
          </section>
          <section className="howtowork__section howtowork__section1">
              <img src={htw1} alt="Achat de vêtements" className="howtowork__img"/>
              <section>
                  <p className="howtowork__sectiontitle">1. Achat de vêtements*</p>
                  <p className="howtowork__sectiondescription">*Plusieurs sources possible dont tes propres vêtements !
                      Apportez-les dans notre boutique RIFRAICH.
                      Nos experts évaluent l'état de chaque pièce et vous font une offre de rachat juste et
                      transparente.</p>
              </section>
          </section>
          <section className="howtowork__section howtowork__section2">
              <img src={htw2} alt="Réparation et remise en état de tes vêtements" className="howtowork__img"/>
              <section>
                  <p className="howtowork__sectiontitle">2. Réparation et remise en état de tes vêtements</p>
                  <p className="howtowork__sectiondescription">Chaque vêtement est ensuite soigneusement inspecté et
                      réparé si nécessaire par nos artisans qualifiés. Nous nous engageons à offrir une seconde vie à
                      vos vêtements en leur donnant une nouvelle jeunesse.</p>
              </section>
          </section>
          <section className="howtowork__section howtowork__section3">
              <img src={htw3} alt="Préparation de nos fameux colis" className="howtowork__img"/>
              <section>
                  <p className="howtowork__sectiontitle">3. Préparation de nos fameux colis</p>
                  <p className="howtowork__sectiondescription">Une fois réparés et reconditionnés, vos vêtements sont
                      emballés dans des matériaux écologiques et recyclables. Nous minimisons notre impact
                      environnemental à chaque étape du processus.</p>
              </section>
          </section>
          <section className="howtowork__section howtowork__section4">
              <img src={htw4} alt="Le colis est en route pour chez toi !" className="howtowork__img"/>
              <section>
                  <p className="howtowork__sectiontitle">4. Le colis est en route pour chez toi !</p>
                  <p className="howtowork__sectiondescription">Recevez vos vêtements d'occasion premium chez vous en
                      toute sécurité et dans les meilleurs délais. Nous proposons des options d'expédition flexibles
                      pour répondre à vos besoins.</p>
              </section>
          </section>
          <section className="howtowork__arrow howtowork__arrow1">
              <img src={arrow1} alt="Flèche" className="howtowork__arrow"/>
          </section>
          <section className="howtowork__arrow howtowork__arrow2">
              <img src={arrow2} alt="Flèche" className="howtowork__arrow"/>
          </section>
          <section className="howtowork__arrow howtowork__arrow3">
              <img src={arrow3} alt="Flèche" className="howtowork__arrow"/>
          </section>
          <section className="howtowork__arrow howtowork__arrow4">
              <img src={arrow4} alt="Flèche" className="howtowork__arrow"/>
          </section>
      </section>
  );
}

export default HowToWork;