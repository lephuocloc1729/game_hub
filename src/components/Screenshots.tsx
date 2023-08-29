import useScreenshots from "../hooks/useScreenshots";
import ScreenshotsSkeleton from "./ScreenshotsSkeleton";

const Screenshots = ({ slug }: { slug: string }) => {
  const { data, isLoading, error } = useScreenshots(slug);
  if (error) throw new Error();
  if (isLoading) return <ScreenshotsSkeleton />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data?.results.map(({ image }) => (
        <img src={image} />
      ))}
    </div>
  );
};

export default Screenshots;
