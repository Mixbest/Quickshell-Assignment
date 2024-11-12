import React from 'react';
import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board App</h1>
      </header>
      <main>
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;