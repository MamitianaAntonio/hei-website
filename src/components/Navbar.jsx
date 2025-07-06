function Navbar() {
  const navList = ["Accueil", "Actualités", "bourse d'études", "Inscription"];

  return (
    <nav className="sticky top-0 z-1000  bg-white shadow-sm py-3 gap-40 flex items-center justify-center">
      <img
        src="https://hei.school/wp-content/uploads/2022/09/cropped-Logo-e1662790239183.png"
        alt="Logo HEI"
        className="h-20 w-auto object-cover"
      />

      <div className="flex items-center gap-3">
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navList.map((list) => {
            return (
              <li
                key={list}
                className="uppercase font-bold text-xl cursor-pointer"
              >
                {list}
              </li>
            );
          })}
        </ul>

        {/* Bouton Connexion */}
        <button className="bg-[var(--hei-blue)] mx-4 uppercase text-white px-4 py-2 font-bold rounded hover:bg-[var(--hei-gold)] cursor-pointer transition duration-300">
          intranet
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
