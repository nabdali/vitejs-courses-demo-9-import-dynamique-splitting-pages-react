import React from 'react';
import { Routes, Route } from 'react-router';
import PageAccueil from './PageAccueil';
import PageAPropos from './PageAPropos';

//const PageAccueil = React.lazy(() => import('./PageAccueil'));
//const PageAPropos = React.lazy(() => import('./PageAPropos'));
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<PageAccueil />} />
      <Route path="/a-propos" element={<PageAPropos />} />
    </Routes>
  );
}

export default App;
