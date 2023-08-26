import { Genre } from "../services/fetchGenres";
const GenreItem = ({
  genre,
  onSelect,
  selectedGenreId,
}: {
  genre: Genre;
  onSelect: React.Dispatch<React.SetStateAction<number | null>>;
  selectedGenreId: number | null;
}) => {
  const style = `flex gap-3 justify-start items-center mb-6 cursor-pointer hover:text-xl hover:font-bold ${
    selectedGenreId === genre.id && "text-xl font-bold"
  }`;
  return (
    <li key={genre.id} className={style}>
      <img
        src={genre.image_background}
        className="w-10 h-10 object-cover rounded-lg text-xl"
      />
      <button
        className="text-start"
        onClick={() => onSelect && onSelect(genre.id)}
      >
        {genre.name}
      </button>
    </li>
  );
};

export default GenreItem;
