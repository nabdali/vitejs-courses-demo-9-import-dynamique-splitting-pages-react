import React from 'react';
import { Routes, Route } from 'react-router';
import PageAccueil from './components/PageAccueil';
import PageAPropos from './components/PageAPropos';

//const PageAccueil = React.lazy(() => import('./components/PageAccueil'));
//const PageAPropos = React.lazy(() => import('./components/PageAPropos'));
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<PageAccueil />} />
      <Route path="/a-propos" element={<PageAPropos />} />
    </Routes>
  );
}

export default App;
