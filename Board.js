import React from 'react';
import TicketCard from './TicketCard';

const groupByUser = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const user = ticket.user || "Unassigned";
    if (!grouped[user]) {
      grouped[user] = [];
    }
    grouped[user].push(ticket);
    return grouped;
  }, {});
};

const groupByStatus = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const status = ticket.status || "Unspecified";
    if (!grouped[status]) {
      grouped[status] = [];
    }
    grouped[status].push(ticket);
    return grouped;
  }, {});
};

const groupByPriority = (tickets) => {
  return tickets.reduce((grouped, ticket) => {
    const priority = ticket.priority;
    if (!grouped[priority]) {
      grouped[priority] = [];
    }
    grouped[priority].push(ticket);
    return grouped;
  }, {});
};

const sortByPriority = (tickets) => {
  return tickets.sort((a, b) => b.priority - a.priority);
};

const sortByTitle = (tickets) => {
  return tickets.sort((a, b) => a.title.localeCompare(b.title));
};

const Board = ({ tickets, groupBy, sortBy }) => {
  let groupedTickets = [];
  if (groupBy === "user") {
    groupedTickets = groupByUser(tickets);
  } else if (groupBy === "status") {
    groupedTickets = groupByStatus(tickets);
  } else if (groupBy === "priority") {
    groupedTickets = groupByPriority(tickets);
  }

  let sortedTickets = [];
  Object.keys(groupedTickets).forEach((groupKey) => {
    sortedTickets[groupKey] = sortBy === "priority"
      ? sortByPriority(groupedTickets[groupKey])
      : sortByTitle(groupedTickets[groupKey]);
  });

  return (
    <div className="board">
      {Object.keys(sortedTickets).map((groupKey) => (
        <div key={groupKey} className="group">
          <h2>{groupKey}</h2>
          {sortedTickets[groupKey].map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
s