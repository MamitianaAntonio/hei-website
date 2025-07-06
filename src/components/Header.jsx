import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "react-feather";

const slides = [
    {
        image: "https://hei.school/wp-content/uploads/2024/09/hei-banner-2.webp",
        title: "Haute École d'Informatique",
        text: "« L’éducation est l’arme la plus puissante pour changer le monde » – Nelson Mandela. « L’éducation dans l’informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar » – HEI.",
    },
    {
        image: "https://hei.school/wp-content/uploads/2024/09/hei-banner-3.webp",
        title: "Haute École d'Informatique",
        text: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants.",
    },
    {
        image: "https://hei.school/wp-content/uploads/2024/09/hei-banner-1.webp",
        title: "Haute École d'Informatique",
        text: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l’employabilité de nos étudiants.",
    },
];

const titleButton = [
  "Inscrivez-vous ici",
  "Emploi du temps",
  "Programme pédagogique",
];

function Header() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

  const { image, title, text } = slides[current];

    return (
        <header
            className="relative min-h-screen w-screen flex flex-col items-center justify-center text-center gap-14 px-10 bg-cover bg-center bg-blend-multiply text-white transition-all duration-700"
            style={{
                backgroundImage: `url(${image})`,
                backgroundColor: "rgba(0,0,0,0.4)",
                backgroundBlendMode: "multiply",
            }}
        >
            <h1 className="text-7xl font-bold">{title}</h1>
            <p className="text-2xl max-w-5xl p-5">{text}</p>

            <div className="flex justify-center gap-9 my-5">
                {titleButton.map((button) => {
                    return (
                        <button className="w-3xs">
                            <span className="bg-white text-black px-4 py-4 font-bold rounded hover:bg-gray-100 cursor-pointer">{button}</span>
                        </button>
                    );
                })}
            </div>
            <p className="text-xl relative top-10">Habilitation MESupRES, suivant l’arrêté n°31309/2023</p>

            <div className="w-screen absolute flex justify-between p-8">
                <button
                    onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="text-white p-3 rounded-full hover:bg-gray-200 hover:text-black"
                >
                    <ChevronLeft size={42} />
                </button>

                <button
                    onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                    className="text-white p-3 rounded-full hover:bg-gray-200 hover:text-black"
                >
                    <ChevronRight size={42} />
                </button>
            </div>

        </header>
    );
}

export default Header;
