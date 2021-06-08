import React from 'react'
import '../style/animations.css'
import '../style/style.css'

const About = () => {
    
    const divStyle1 = {
        width: '90%'
      }
      const divStyle2 = {
        width: '90%'
      }
      const divStyle3 = {
        width: '65%'
      }  
      const divStyle4 = {
        width: '80%'
      }  
      const divStyle5 = {
        width: '60%'
      }  

    return (
        <section id="about">
        <div className="container flex">
        <div className=" header way slide-in-left" >
            ABOUT
        </div>
        <div className="header-bar slide-in-left dly5"></div>

        <div className="flex row label-wrap">
            <div className="flex row-gt-sm">
                <div className="flex bullet-wrap ">
                    <div className="hex-wrap way flip-in-x">
                    <div className="hexagon">
                        <i className="mdi mdi-speedometer"></i>
                    </div>
                    </div>
                    <div className="way fade-in">
                    <div className="label bold">Fast</div>
                    <div>
                        Fast load times and lag free interaction, my highest
                        priority.
                    </div>
                    </div>
                </div>

                <div className="flex bullet-wrap ">
                    <div className="hex-wrap way hex1 flip-in-x ">
                        <div className="hexagon">
                            <i className="mdi mdi-cellphone-link"></i>
                        </div>
                    </div>
                    <div className="way hex1 fade-in ">
                    <div className="label bold">Responsive</div>
                    <div>My layouts will work on any device, big or small.</div>
                    </div>
                </div>
            </div>

            <div className="flex row-gt-sm">
                <div className="flex bullet-wrap ">
                    <div className="hex-wrap way flip-in-x hex2">
                        <div className="hexagon">
                            <i className="mdi mdi-lightbulb-outline"></i>
                        </div>
                    </div>
                    <div className="waypoint fade-in hex2">
                        <div className="label bold">Intuitive</div>
                        <div>Strong preference for easy to use, intuitive UX/UI.</div>
                    </div>
                </div>

                <div className="flex bullet-wrap ">
                    <div className="hex-wrap way flip-in-x hex3">
                        <div className="hexagon">
                            <i className="mdi mdi-rocket"></i>
                        </div>
                    </div>
                    <div className="way fade-in hex3">
                        <div className="label bold">Dynamic</div>
                        <div>
                            Websites don't have to be static, I love making pages come
                            to life.
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/* DE AQUI PARA ABJO FALTA */}
        <div className="skills-wrapper flex row-gt-sm">
            <div className="flex flex-50-gt-sm way slide-in-left">
                <img src="../img/me.png" className="me" alt="asaber"/>
                <div className="label bold">Who's this guy?</div>
                <div>
                    I'm a Front-End Developer for
                    <a
                    className="highlight"
                    href="http://www.chownow.com"
                    target="_blank"
                    rel="noreferrer"
                    >ChowNow</a
                    >
                    in Los Angeles, CA.
                    <br />
                    I have serious passion for UI effects, animations and creating
                    intuitive, dynamic user experiences.
                    <br />
                    <span className="page-link highlight" dest="contact"
                    >Let's make something special.</span
                    >
                </div>
            </div>

            <div className="flex flex-50-gt-sm way bars-wrap slide-in-right" >
            <div className="bar flex">
                <div className="bar fill" style={divStyle1}>
                    <div className="tag bold flex">CSS</div>
                </div>
                <span>90%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={divStyle1}>
                <div className="tag bold flex">HTML</div>
                </div>
                <span>90%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={divStyle2}>
                <div className="tag bold flex">React</div>
                </div>
                <span>80%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={divStyle2}>
                <div className="tag bold flex">JavaScript</div>
                </div>
                <span>80%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={divStyle4}>
                <div className="tag bold flex">Angular</div>
                </div>
                <span>50%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={divStyle3}>
                <div className="tag bold flex">Node.js</div>
                </div>
                <span>65%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={divStyle3}>
                <div className="tag bold flex">Ruby/Rails</div>
                </div>
                <span>65%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={divStyle4}>
                <div className="tag bold flex">UI Design</div>
                </div>
                <span>50%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={divStyle5}>
                <div className="tag bold flex">Photoshop</div>
                </div>
                <span>60%</span>
            </div>

            <div className="bar flex">
                <div className="bar fill" style={divStyle4}>
                <div className="tag bold flex">Sketch</div>
                </div>
                <span>50%</span>
            </div>
            </div>
        </div>
        </div>
    </section>   
    )
}

export default About