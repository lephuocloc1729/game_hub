import dart from "../assets/dart.png";
import like from "../assets/like.png";
import skip from "../assets/skip.png";
import meh from "../assets/meh.webp";

const Emoji = ({ rating }: { rating: number }) => {
  if (rating === 2 || rating === 3 || rating === 4 || rating === 5) {
    const emojiMap = {
      2: { src: skip, alt: "skip" },
      3: { src: meh, alt: "meh" },
      4: { src: like, alt: "recommended" },
      5: { src: dart, alt: "exceptional" },
    };
    return (
      <span>
        <img
          src={emojiMap[rating].src}
          alt={emojiMap[rating].alt}
          className="w-10"
        ></img>
      </span>
    );
  }
  return null;
};

export default Emoji;
