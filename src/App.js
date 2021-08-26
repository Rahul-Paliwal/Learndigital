import React from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import Services from './components/Services/Services';
import TopNav from './components/TopNav/TopNavigation';  
import Analysis from './components/Analysis/Analysis';  
function App() {
  return (
    <div className="App">
        <TopNav/>
        <TopBanner />
        <Services/>
        <Analysis/>
    </div>
  );
}

export default App;
