import React from 'react'

import Navbar from './NavBar'

function Layout (props) {
    //const children = props.children
    return (
        // React.Fragment es el quivalente a <div/>, con la ventaja que no se muestra al compilar la página y por tanto no se llena de tantos divs innecesarios.
        <React.Fragment> 
            <Navbar/>
            {props.children}
        </React.Fragment>

        )
}

export default Layout