import React from 'react';

import './App.css';

import Unauthorized from './components/Unauthorized';
import RenderOnAnonymous from './components/RenderOnAnonymous';
import RenderOnAuthenticated from './components/RenderOnAuthenticated';
import Secure from './components/Secure';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <RenderOnAnonymous>
          <Unauthorized />
        </RenderOnAnonymous>
        <RenderOnAuthenticated>
          <Secure />
        </RenderOnAuthenticated>
      </header>
    </div>
  );
}

export default App;
