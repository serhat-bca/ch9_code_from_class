import { useFilterStore } from "../store/useFilterStore";

const FilterTask = () => {
  const filter = useFilterStore((state) => state.filter);
  const setFilter = useFilterStore((state) => state.setFilter);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    console.log("Selected Filter: ", selectedValue);
    setFilter(event.target.value);
  };
  return (
    <div>
      <span>
        <strong>Filter Tasks</strong>
        <select onChange={handleFilterChange} value={filter}>
          <option value="all">All</option>
          <option value="urgent">Urgent</option>
          <option value="non-urgent">Non-Urgent</option>
        </select>
      </span>
    </div>
  );
};

export default FilterTask;
