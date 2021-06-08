import React from 'react'


const Welcome = () => (
    <section id="home" className="flex height-fix">
        <div id="pt" className="canvas"></div>
        <div className="flex">
        <div className="text">
            Hello, I'm <span className="highlight">Avilio Amador</span>.
            <br />
            I'm a full-stack web developer.
        </div>

        <div className="button page-link" dest="about">
            View my work <i className="mdi mdi-arrow-right"></i>
        </div>

        <nav className="flex">
            <div className="link-wrap">
            <div className="active page-link" dest="home">home</div>
            <div className="page-link" dest="about">about</div>
            <div className="page-link" dest="portfolio">portfolio</div>
            <div className="page-link" dest="blog">blog</div>
            <div className="page-link" dest="contact">contact</div>
            </div>
            <i className="mdi mdi-menu"></i>
        </nav>
        </div>
    </section>    
)

export default Welcome