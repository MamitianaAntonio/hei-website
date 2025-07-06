import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <>
      <div className="flex justify-center bg-blue-950 text-white gap-25 p-7">
        <div className="max-w-50">
          <img
            className="h-17 mb-5"
            src="https://www.hei.school/wp-content/uploads/2022/09/Logo-e1662790239183.png"
            alt=""
          />
          <div className="flex flex-col gap-4">
            <p>Formation habilitée par l’Etat suivant le système LMD</p>
            <p>Habilitation MESupRes n°31309/2023</p>
          </div>
        </div>
        <div className="max-w-50 flex flex-col gap-1 ">
          <h3 className="mt-22 text-xl font-semibold">Adresse</h3>
          <p>II J 161 R Ambodivoanjo</p>
          <p>Ivandry Antananarivo</p>
          <p>101, Madagascar</p>
        </div>
        <div className="max-w-50 flex flex-col gap-1">
          <h3 className="mt-22 text-xl font-semibold">Navigation</h3>
          <p className="text-amber-400">Accueil</p>
          <p className="hover:text-amber-400">Actualités</p>
          <p className="hover:text-amber-400">Bourse d'études</p>
          <p className="hover:text-amber-400">Inscription</p>
        </div>
        <div className="max-w-50 flex flex-col ">
          <h3 className="mt-22 text-xl font-semibold">Médias sociaux</h3>
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-center font-semibold">
          © HEI Madagascar
        </p>
      </div>
    </>
  );
}

export default Footer;