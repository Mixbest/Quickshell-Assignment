const SortSelector = ({ onSortChange }) => (
    <div>
      <label>Sort By:</label>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
  
  export default SortSelector;
  