import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div>
      <dt className="text-gray-500 text-xl">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
