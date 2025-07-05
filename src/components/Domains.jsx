function Domains() {
    const domainsList = [
        {
            image: "https://www.hei.school/wp-content/uploads/2024/05/Cloud-et-cybersecurite_Plan-de-travail-1-150x150.png",
            title: "Cloud et cybersécurité",
            text: "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.",
        },
        {
            image: "https://www.hei.school/wp-content/uploads/2024/05/Intelligence-artificielle_Plan-de-travail-1-150x150.png",
            title: "Intelligence artificielle",
            text: "Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.",
        },
        {
            image: "https://www.hei.school/wp-content/uploads/2024/05/Ingenierie-logicielle_Plan-de-travail-1-1-150x150.png",
            title: "Ingénierie logicielle",
            text: "Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.",
        },
    ];


    return (
        <div className="p-10 bg-gray-100 flex flex-col gap-14">
            <div className="text-center">
                <h2 className="text-5xl text-blue-950 font-bold">Domaines</h2>
                <p>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
            </div>
            <div className="flex flex-row w-full justify-center gap-7">
                {domainsList.map((domainsList, index) => (
                    <div key={index} className=" w-80 p-3 bg-white  rounded-2xl shadow-2xl">
                        <div className="flex flex-col items-center text-center">
                            <div>
                                <img src={domainsList.image}
                                    alt=""></img>
                            </div>
                            <div>
                                <div>
                                    <h3 className="text-amber-500 text-xl">{domainsList.title}</h3>
                                </div>
                            </div>
                            <div>
                                <div>

                                    <p>{domainsList.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Domains;