import React from 'react';
import Header from './components/Header';
import KegControl from './components/KegControl';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <KegControl />
      </React.Fragment>
    </div>
  );
}

export default App;