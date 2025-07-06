import {
  faGraduationCap,
  faMedal,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div className="flex p-5 m-10 items-center justify-center gap-10">
      <img
        src="https://hei.school/wp-content/uploads/2024/11/A-propos-left-1.webp"
        alt="about-image"
        className="w-auto h-[550px] object-cover"
      />

      <div className="flex flex-col gap-10 w-1/3">
        <h1 className="text-5xl font-bold text-[var(--hei-blue)]">
          A propos de nous
        </h1>

        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faGraduationCap}
              size="3x"
              className="text-[var(--hei-gold)]"
            />
            <h3 className="text-xl font-bold text-[var(--hei-blue)]">+3ans</h3>
          </div>

          <p className="w-4xs text-md leading-7 text-[var(--hei-blue)]">
            Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers
            de l’informatique. Nous sommes un groupe d’experts, de
            professionnels et des passionnés de l’informatique de Madagascar et
            du monde entier.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faUserClock}
              size="3x"
              className="text-[var(--hei-gold)]"
            />
            <h3 className="text-xl font-bold text-[var(--hei-blue)]">
              +250 étudiants
            </h3>
          </div>

          <p className="w-4xs leading-7 text-md text-[var(--hei-blue)]">
            Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà
            fait confiance à notre formation habilitée par l’État malgache. Avec
            eux tous, nous sommes fiers de pouvoir parler de la “grande famille
            HEI”.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faMedal}
              size="3x"
              className="text-[var(--hei-gold)]"
            />
            <h3 className="text-xl font-bold text-[var(--hei-blue)]">
              Notre mission
            </h3>
          </div>

          <p className="w-4xs leading-7 text-md text-[var(--hei-blue)]">
            Notre mission est d’amener des jeunes malgaches sur des domaines
            porteurs comme l’intelligence artificielle, la cybersécurité ou la
            programmation afin de favoriser leur employabilité et le
            développement de Madagascar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
