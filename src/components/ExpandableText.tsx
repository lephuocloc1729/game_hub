import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [isFull, setIsFull] = useState(false);
  if (!children) throw new Error();
  if (children.length > 300) {
    return (
      <div className="leading-8 pb-6 ">
        <p>
          {isFull ? children : children.slice(0, 300) + "..."}
          <button
            className="px-2 rounded-md bg-yellow-300 text-dark-blue ml-2"
            onClick={() => {
              setIsFull(!isFull);
            }}
          >
            {isFull ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
    );
  }
  return <p>{children}</p>;
};

export default ExpandableText;
