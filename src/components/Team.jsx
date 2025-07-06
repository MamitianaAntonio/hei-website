import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { ChevronLeft, ChevronRight } from "react-feather";

const members = [
  {
    name: "Yannick Raharijoana",
    title: "Responsable technique ML chez Rocket Science",
    subtitle: "Ottawa – Canada",
    image:
      "https://hei.school/wp-content/uploads/2022/01/5746AC1E761A42D1B7D89496C9A6BE9B_edited-e1716502720974-150x150.jpg",
  },
  {
    name: "Dre Tahina Ralitera",
    title: "Docteure-Ingénieure, CNRS France",
    subtitle: "Prix L’Oréal-UNESCO pour les Femmes en Science (2017)",
    image:
      "https://hei.school/wp-content/uploads/2022/01/Tahina-OK-e1716502943928-150x150.png",
  },
  {
    name: "Dr Lou Maurica",
    title: "Docteur-Ingénieur en informatique",
    subtitle: "Fondateur et Directeur pédagogique de HEI",
    image:
      "https://hei.school/wp-content/uploads/2022/01/97-portraits-97_edited-e1716502895676-150x150.jpg",
  },
  {
    name: "Mirado RAFENOMAHENINTSOA",
    title: "Date business and Business intelligence Specialiste 5+",
    subtitle: "",
    image: "https://hei.school/wp-content/uploads/2025/05/Mirado-150x150.webp",
  },
  {
    name: "Julien RAJERISON",
    title: "Lead développeur | Fondateur de l'association Techzara Madagascar",
    subtitle: "",
    image: "https://hei.school/wp-content/uploads/2025/05/Julien-150x150.webp",
  },
  {
    name: "Ryan ANDRIAMAHERY",
    title:
      "Développeur backend | Confodateur et Directeur des opérations de HEI",
    subtitle: "",
    image:
      "https://hei.school/wp-content/uploads/2025/03/ryan-min-150x150.webp",
  },
  {
    name: "Jean Aimé Max",
    title: "Responsable technique cybersécurité chez CES",
    subtitle: "France continental Toulouse",
    image:
      "https://hei.school/wp-content/uploads/2022/01/Jean-Aime-Maxa-modified-150x150.jpg",
  },
];

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = members.length;

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const goToPreviousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const getVisibleMembers = () => {
    const prev = (currentIndex - 1 + total) % total;
    const current = currentIndex;
    const next = (currentIndex + 1) % total;
    return [members[prev], members[current], members[next]];
  };

  const visibleMembers = getVisibleMembers();

  return (
    <div className="flex flex-col items-center w-auto bg-gray-200 p-10">
      <h1 className="text-5xl font-bold text-[var(--hei-blue)]">
        L'équipe pédagogique
      </h1>

      <div className="p-10 w-2/3 text-center leading-7">
        <p className="text-[var(--hei-blue)]">
          Notre équipe pédagogique se compose d’experts nationaux et
          internationaux de l’informatique, de la cybersécurité, de
          l’intelligence artificielle, dont un ingénieur chez Google. Ils sont
          passionnés par l’informatique et sont engagés vers l’excellence. Nous
          sommes conscients que cette équipe est la pierre angulaire de
          l’employabilité de nos étudiants, elle a été soigneusement
          sélectionnée.
        </p>
      </div>

      <div className="relative flex items-center justify-between w-full mx-auto overflow-hidden">
        {/* Left chevron */}
        <button
          onClick={goToPreviousCard}
          className="absolute left-0 bg-white shadow-md p-3 rounded-full hover:bg-gray-200 transition z-20"
        >
          <ChevronLeft className="text-gray-700" />
        </button>

        {/*Card*/}
        <div className="flex space-x-4 justify-center items-center w-full px-15 overflow-hidden">
          {visibleMembers.map((member, i) => (
            <div
              key={i}
              className={`transition-transform duration-300 ${
                i === 1 ? "scale-105" : "scale-95 opacity-70"
              }`}
            >
              <ProfileCard {...member} />
            </div>
          ))}
        </div>

        {/*Right chevron*/}
        <button
          onClick={goToNextCard}
          className="absolute right-0 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-blue-800" />
        </button>
      </div>
    </div>
  );
}

export default Team;
