const technos = [
  {
    src: "https://hei.school/wp-content/uploads/2024/06/Java-150x150.png",
    alt: "Java",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/06/python-150x150.png",
    alt: "Python",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/06/JS-150x150.png",
    alt: "JavaScript",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/06/C-150x150.png",
    alt: "C",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/06/TS-150x150.png",
    alt: "TypeScript",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/09/docker-300x77.png",
    alt: "Docker",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/09/next.png",
    alt: "Next.js",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/09/aws.png",
    alt: "AWS",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/09/serverless.png",
    alt: "Serverless",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/09/react.png",
    alt: "React",
  },
  {
    src: "https://hei.school/wp-content/uploads/2024/09/openapi.png",
    alt: "OpenAPI",
  },
];

function Technos() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Les technos et langages utilisés
      </h2>
      <p className="text-blue-900 max-w-4xl mx-auto mb-12">
        Nos étudiants sont formés à l’utilisation et à la maîtrise des langages
        de programmation Java et JavaScript. Ces deux langages occupent une
        place de choix dans le domaine du développement logiciel et du web,
        offrant une polyvalence et une robustesse appréciées par les
        développeurs à travers le monde.
      </p>

      <div className="flex flex-col items-center space-y-8">
        {/* Ligne 1 : 5 images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {technos.slice(0, 5).map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.alt}
              className="w-24 h-24 object-contain mx-auto"
            />
          ))}
        </div>

        {/* Ligne 2 : 6 images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {technos.slice(5).map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={tech.alt}
              className="w-26 h-26 object-contain mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technos;
