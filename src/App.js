import React from 'react';

import './App.css';

import Unauthorized from './components/Unauthorized';
import RenderOnAnonymous from './components/RenderOnAnonymous';
import RenderOnAuthenticated from './components/RenderOnAuthenticated';
import Secure from './components/Secure';

function App() {
  return (
    <div className='App'>
      <RenderOnAnonymous>
        <Unauthorized />
      </RenderOnAnonymous>{' '}
      <RenderOnAuthenticated>
        <Secure />
      </RenderOnAuthenticated>
    </div>
  );
}

export default App;
