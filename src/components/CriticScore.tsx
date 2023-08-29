const CriticScore = ({ score }: { score: number }) => {
  return (
    <div className="px-2 py-[2px] bg-cs-clr text-green-600 dark:text-green-200 rounded-md inline">
      {score}
    </div>
  );
};

export default CriticScore;
