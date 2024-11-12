import React from 'react';

const TicketCard = ({ ticket }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 4: return "red";
      case 3: return "orange";
      case 2: return "yellow";
      case 1: return "green";
      case 0: return "gray";
      default: return "gray";
    }
  };

  return (
    <div className="ticket-card" style={{ borderColor: getPriorityColor(ticket.priority) }}>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Assigned to: {ticket.user || 'Unassigned'}</p>
      <p>Priority: {getPriorityColor(ticket.priority)}</p>
    </div>
  );
};

export default TicketCard;
