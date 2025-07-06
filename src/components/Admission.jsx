const steps = [
  {
    id: "01",
    title: "Dépôt de dossiers",
    description: "pour les bacheliers de toutes séries sans limite d’âge",
    bgColor: "bg-[#fce0b0]",
  },
  {
    id: "02",
    title: "Test de niveau",
    description:
      "composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D",
    bgColor: "bg-[#f5ca7b]",
  },
  {
    id: "03",
    title: "Inscription définitive",
    description: "(si test réussi)",
    bgColor: "bg-[#efc067]",
  },
];

function Admission() {
  return (
    <div className="bg-[#6d89c4] py-16 text-center text-white px-4">
      <h2 className="text-4xl font-bold mb-4">Admission</h2>
      <p className="max-w-3xl mx-auto mb-10">
        Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se
        fait par test de niveau : une épreuve de français niveau B2 et d’une
        épreuve de mathématiques niveau Terminale D.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 max-w-5xl mx-auto text-black">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`w-full md:w-1/3 p-6 ${step.bgColor} flex flex-col justify-between`}
          >
            <div className="text-left space-y-2">
              <h3 className="text-5xl font-bold text-white">{step.id}</h3>
              <p>
                <strong className="text-xl">{step.title}</strong> :{" "}
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-6 py-3 border-3 text-xl border-white text-white font-semibold cursor-pointer rounded hover:bg-white hover:text-[#6d89c4] transition">
          Inscrivez-vous ici
        </button>
        <button className="px-6 py-3 bg-[#0e1a39] text-xl text-white font-semibold rounded cursor-pointer hover:bg-white hover:text-[#0e1a39] transition duration-300">
          Résultat concours
        </button>
      </div>
    </div>
  );
}

export default Admission;
