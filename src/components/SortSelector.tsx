import useGameQuery from "../GameQueryStore";

interface Ordering {
  value: string;
  name: string;
}

const SortSelector = () => {
  const setSortOrder = useGameQuery((s) => s.setSortOrder);

  const selectedOrder = useGameQuery((s) => s.gameQuery.ordering);
  const orderingMap: Ordering[] = [
    { value: "", name: "Relevance" },
    { value: "name", name: "Name" },
    { value: "-released", name: "Released Date" },
    { value: "-metacritic", name: "Popularity" },
    { value: "-rating", name: "Rating" },
    { value: "-added", name: "Date Added" },
  ];
  return (
    <select
      name="platforms"
      id="platforms"
      key={"platforms"}
      className=" block appearance-none bg-slate-200 dark:text-white dark:bg-slate-600 dark:hover:bg-slate-500 text-gray-700 drop-shadow-xl py-2 px-2 rounded leading-tight hover:bg-slate-300 focus:outline-none mb-4 ml-4 cursor-pointer text-sm"
      onChange={(e) => setSortOrder(e.target.value)}
    >
      {orderingMap.map(
        (order) =>
          order.value == selectedOrder && (
            <option key={order.value}>Order By: {order.name}</option>
          )
      )}
      {orderingMap.map(
        (order) =>
          order.value != selectedOrder && (
            <option key={order.value} value={order.value}>
              {order.name}
            </option>
          )
      )}
    </select>
  );
};

export default SortSelector;
