const GroupingSelector = ({ onGroupChange }) => (
    <div>
      <label>Group By:</label>
      <select onChange={(e) => onGroupChange(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
  
  export default GroupingSelector;
  