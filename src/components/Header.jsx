function Header() {
    const bouton = ["Inscrivez-vous ici", "Emploi du temps", "Programme pédagogique"];

    return (
        <header className="min-h-screen w-screen flex flex-col items-center justify-center text-center gap-14 px-10"
        style={{backgroundImage: `url ()`}}
        >

            <h1 className="text-7xl">Haute École d'Informatique</h1>
            <p className="text-lg max-w-5xl">«&nbsp;L’éducation est l’arme la plus 
                puissante pour changer le monde&nbsp;» selon Nelson Mandela.
                 «&nbsp;L’éducation dans l’informatique est une arme très 
                 puissante pour lutter contre la pauvreté à Madagascar&nbsp;»
                  selon HEI. C’est notre mission.</p>

            <div className="flex justify-center gap-9">
                <span className="bg-white  text-black px-4 py-2 font-bold rounded hover:bg-gray-100 cursor-pointer">Inscrivez-vous ici</span>
                <span className="bg-amber-500  text-white px-4 py-2 font-bold rounded hover:bg-orange-400 cursor-pointer">Emploi du temps</span>
                <span className="bg-blue-900  text-white px-4 py-2 font-bold rounded hover:text-gray-100 cursor-pointer">Programme pédagogique</span>
            </div>

            
        </header>
    );
}

export default Header;
