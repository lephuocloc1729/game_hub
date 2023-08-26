import { Genre } from "../services/fetchGenres";
const GenreItem = ({ genre }: { genre: Genre }) => {
  return (
    <li
      key={genre.id}
      className="flex gap-3 justify-start items-center mb-6 cursor-pointer"
    >
      <img
        src={genre.image_background}
        className="w-10 h-10 object-cover rounded-lg text-xl"
      />
      <p>{genre.name}</p>
    </li>
  );
};

export default GenreItem;
