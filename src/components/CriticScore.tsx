const CriticScore = ({ score }: { score: number }) => {
  return (
    <div className="px-2 bg-cs-clr text-green-600 dark:text-green-200 rounded-md">
      {score}
    </div>
  );
};

export default CriticScore;
