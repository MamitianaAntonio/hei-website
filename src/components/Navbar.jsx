function Navbar() {
  const navList = ["Accueil", "Actualités", "bourse d'études", "Inscription"];

  return (
    <nav className="bg-white shadow-md py-3 flex items-center justify-around">
      <img
        src="https://hei.school/wp-content/uploads/2022/09/cropped-Logo-e1662790239183.png"
        alt="Logo HEI"
        className="h-25 w-25 object-contain"
      />

      <div className="flex items-center gap-3">
        {/* Liens de navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navList.map((list) => {
            return (
              <li key={list} className="uppercase font-bold text-xl">
                {list}
              </li>
            );
          })}
        </ul>

        {/* Bouton Connexion */}
        <button className="bg-blue-600 uppercase text-white px-4 py-2 font-bold rounded hover:bg-blue-700">
          intranet
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
