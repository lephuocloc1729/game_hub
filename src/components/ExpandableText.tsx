import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [isFull, setIsFull] = useState(false);
  if (!children) throw new Error();
  if (children.length > 300) {
    return (
      <>
        <p>
          {isFull ? children : children.slice(0, 300) + "..."}
          <button
            onClick={() => {
              setIsFull(!isFull);
            }}
          >
            {isFull ? "Show Less" : "Read More"}
          </button>
        </p>
      </>
    );
  }
  return <p>{children}</p>;
};

export default ExpandableText;
