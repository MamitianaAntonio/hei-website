function ProfileCard({ name, image, title, subtitle }) {
  return (
    <div className="min-h-[350px] bg-[var(--hei-white)] rounded-2xl shadow-lg p-8 w-[250px] text-center mx-auto mb-10 transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-[var(--hei-gold)] shadow-md"
      />
      <h3 className="mt-4 text-lg font-bold text-[var(--hei-blue)]">{name}</h3>
      <p className="text-gray-700 text-sm mt-1">{title}</p>
      <p className="text-gray-500 text-xs mt-1">{subtitle}</p>
    </div>
  );
}

export default ProfileCard;
