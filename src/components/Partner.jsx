const partenaires = [
  "https://hei.school/wp-content/uploads/2024/05/LOGO-NEXTA.webp",
  "https://hei.school/wp-content/uploads/2024/05/PN_Logo_baseline_color_ENG.png",
  "https://hei.school/wp-content/uploads/2024/05/Yooz-2023-Logo-2.webp",
  "https://hei.school/wp-content/uploads/2024/05/logo-etech.png",
  "https://hei.school/wp-content/uploads/2024/09/logo_emit.png",
  "https://hei.school/wp-content/uploads/2024/06/Logo-Numer-vf.png",
  "https://hei.school/wp-content/uploads/2024/05/bp-logo-full-1024x331.webp",
  "https://hei.school/wp-content/uploads/2024/05/YIF_LOGO_512x512_BL_on_WH-1.webp",
  "https://hei.school/wp-content/uploads/2024/05/logo-kante-company-1.png",
];

function Partner() {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-4xl font-bold text-[var(--hei-blue)] mb-4">
        Nos partenaires
      </h2>
      <p className="text-blue-900 max-w-4xl mx-auto mb-12">
        L’employabilité de nos étudiants se base sur la pertinence de notre
        programme pédagogique et de la composition de notre corps enseignant,
        mais aussi du soutien et de la collaboration des entreprises
        partenaires.
      </p>

      <div className="flex flex-col items-center gap-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center w-full max-w-6xl">
          {partenaires.slice(0, 5).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partenaire ${index}`}
              className="h-20 object-contain max-w-[140px]"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center w-full max-w-6xl">
          {partenaires.slice(5).map((logo, index) => (
            <img
              key={index + 5}
              src={logo}
              alt={`Partenaire ${index + 5}`}
              className="h-20 object-contain max-w-[140px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partner;
