import React from 'react';
import ReactDOM from 'react-dom';


import App from '../src/routes/App';




// El Provider se utiliza para que la información que está en store, se mande como estado a toda la aplicación y esté disponible para conectarse a ella mediante "connect"
ReactDOM.render
(
        <App />,

    document.getElementById('app')

);