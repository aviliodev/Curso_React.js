import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
//import Badge from './components/Badge'
//import Navbar from './components/NavBar'
// import BadgeNew from './pages/BadgeNew';
// import Badges from './pages/Badges';
import App from './components/App'

// const element = (
//     <div>
//         <h1>Hola, soy Avilio</h1>
//         <p>Soy ingeniero de frontend</p>
//     </div>
// )

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(<Badge 
//                     firstname="Avilio" 
//                     lastname ="Amador"
//                     avatarURL="https://static.platzi.com/media/avatars/avatars/avilio.amador_e1aef778-e4b8-4417-a0dd-48e371f4ee3b.jpg"
//                     jobTitle="Frontend Engineer"
//                     twitter="avilio.amador" 
//                 />, 
//                 container);
ReactDOM.render(<App/>, container);
