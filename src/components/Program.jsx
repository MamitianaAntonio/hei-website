const cards = [
  {
    title: "25%",
    subtitle: "Apprentissage théoriques en présentiel",
  },
  {
    title: "25%",
    subtitle: "Apprentissage sur supports numériques",
  },
  {
    title: "25%",
    subtitle: "Travaux individuels de l’étudiant",
  },
  {
    title: "25%",
    subtitle: "Apprentissage en entreprise",
  },
];

const images = [
  {
    src: "https://hei.school/wp-content/uploads/2025/05/Mask-group-1.webp",
    alt: "Cours",
  },
  {
    src: "https://hei.school/wp-content/uploads/2025/05/Mask-group-2.webp",
    alt: "Étudiants",
  },
  {
    src: "https://hei.school/wp-content/uploads/2025/05/Mask-group-3.webp",
    alt: "Présentation",
  },
];

function Program() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full flex justify-center">
          <img
            src="https://hei.school/wp-content/uploads/2024/11/IMG-03-e1720537524581-1024x950-1.webp"
            alt="Étudiants avec PC"
            className="max-w-md z-10"
          />
          <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-500 z-0" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Le programme pédagogique
          </h2>
          <p className="text-blue-900 mb-6">
            Suivant le système LMD, jusqu’au Master, notre formation repose sur
            un programme pédagogique conçu en adéquation avec les attentes du
            marché. La formation est sanctionnée par un diplôme de Licence et de
            Master en Informatique reconnu par le MESupRes de Madagascar.
          </p>
          <button className="text-25 cursor-pointer px-6 py-3 border-3 border-blue-900 text-blue-900 font-semibold rounded hover:bg-blue-900 hover:text-white transition duration-300">
            Notre Programme
          </button>
        </div>
      </div>

      {/* Card element*/}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {cards.map((item, index) => (
          <div key={index} className="bg-yellow-100 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-yellow-600">{item.title}</h3>
            <p className="text-blue-900 font-bold text-xl">{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Images */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="rounded-lg w-full h-100 object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export default Program;
