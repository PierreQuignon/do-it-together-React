import { FC } from "react";
import "../style/About.css";

const About: FC = () => {

  const el = document.querySelector('.js-placeholders');
  if (el) {
    const images = el.querySelectorAll('.js-img-wrap');
  };
  const buttonOpen = document.querySelector('.js-slider-open');

  return (
    <div className="about-container">
      <button className="button-slider-open js-slider-open" type="button">
        Ouvrir
      </button>
      <div className="placeholders js-placeholders">
        <div
          className="placeholders__img-wrap js-img-wrap"
        >
          <img
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80&ar=0.8"
            className="placeholders__img"
          ></img>
        </div>
      </div>
      <h1>
        "Partagez un moment de bricolage convivial tout en gagnant de l'argent"
      </h1>
      <br />
      <p>
        Tel est l'objectif de <strong>Do It Together.</strong>Tous les
        passionné(e)s de bricolage habitant en ville et dans un logement
        dépourvu de garage comprendrons la frustration de ne pas pouvoir
        bricoler lorsqu'ils ou elles en ressentent le besoin.
      </p>
      <p>
        Grâce à <strong>Do It Together</strong>, louez un atelier à moindre coût
        près de chez vous et bénéficiez de l'outillage dont vous avez besoin
        tout en profitant d'un moment d'échange et de partage avec le loueur.
      </p>
      <br />
      <h2>"Gagnez de l'argent en louant votre atelier"</h2>
      <p>
        Avec le coût de la vie qui ne cesse d'augmenter, pourquoi ne pas louer
        votre atelier ? Vous vous en servez peu n'est ce pas ? Il est alors
        facile de mettre en ligne votre bien sur notre application et cela vous
        permettrait d'arrondir vos fins de mois sans le moindre effort.
      </p>
      <br />
      <h2>"Rencontrez des personnes aussi passionées de bricolage que vous"</h2>
      <p>
        Le bricolage est votre passion et vous aimez rencontrer de nouvelles
        personne ? Il est donc temps de mettre votre atelier en location pour
        partager des moments conviviaux avec des bricoleurs de votre secteur. Si
        vous aimez transmettre vos connaissances, vous pourrez alors en faire
        profiter à des bricoleurs en quête de savoir.
      </p>
      <br />
      <h2>"Bricolez à moindre coût à deux pas de chez vous"</h2>
      <p>
        A l'heure actuelle, il est très compliqué de posséder un logement équipé
        d'un garage prêt d'une grande villes par faute de budjet. Avec
        l'application <strong>Do It Together</strong> tout le monde peut accéder
        à un atelier équipé sans se ruiner, sans engagement et prêt de chez
        soit.
      </p>
    </div>
  );
};

export default About;
