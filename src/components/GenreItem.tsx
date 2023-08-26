import { Genre } from "../services/fetchGenres";
const GenreItem = ({
  genre,
  onSelect,
}: {
  genre: Genre;
  onSelect: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <li
      key={genre.id}
      className="flex gap-3 justify-start items-center mb-6 cursor-pointer"
    >
      <img
        src={genre.image_background}
        className="w-10 h-10 object-cover rounded-lg text-xl"
      />
      <button onClick={() => onSelect && onSelect(genre.id)}>
        {genre.name}
      </button>
    </li>
  );
};

export default GenreItem;
