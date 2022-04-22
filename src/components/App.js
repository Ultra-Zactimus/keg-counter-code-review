import React from 'react';
import Header from './Header';
import KegControl from './KegControl';

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