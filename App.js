import React, { useState } from "react";
import GroupingSelector from "./components/GroupingSelector";
import SortSelector from "./components/SortSelector";
import Board from "./components/Board";
import useTickets from "./hooks/useTickets";
import './styles/App.css';

const App = () => {
  const { tickets, loading, error } = useTickets();
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("priority");

  const handleGroupChange = (groupOption) => setGroupBy(groupOption);
  const handleSortChange = (sortOption) => setSortBy(sortOption);

  return (
    <div className="app">
      {loading && <div>Loading...</div>}
      {error && <div>Error loading data</div>}
      {!loading && !error && (
        <div>
          <GroupingSelector onGroupChange={handleGroupChange} />
          <SortSelector onSortChange={handleSortChange} />
          <Board tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
        </div>
      )}
    </div>
  );
};

export default App;
