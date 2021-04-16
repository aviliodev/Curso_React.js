
import React from 'react'
import { Link } from 'react-router-dom'; /*se importa el componente Link (diferente a "link" de html) que viene con react-router-dom. es como un boton que no refresca la pantalla. Más abajo se usa.*/

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
//import Navbar from '../components/NavBar'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'
import api from '../api'



class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    /*NOTA: NO SE ESTÁ USANDO EL STATE DEL CONSTRUCTOR DE ABAJO. SE USA EL STATE DE ARRIBA.
    /*PRIMERO. Este método se ejecuta cuando se instancia un componente. Nos permite definir el estado inicial del 		
    componente, hacer bind de métodos y definir propiedades internas en las que podemos guardar muchos datos diferente*/
    constructor(props) {
        super(props) // super clase

        this.state = {
            data: [
                {
                  id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                  firstName: "Freda",
                  lastName: "Grady",
                  email: "Leann_Berge@gmail.com",
                  jobTitle: "Legacy Brand Director",
                  usertName: "FredaGrady22221-7573",
                  avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                },
                {
                  id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                  firstName: "Major",
                  lastName: "Rodriguez",
                  email: "Ilene66@hotmail.com",
                  jobTitle: "Human Research Architect",
                  usertName: "ajorRodriguez61545",
                  avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                },
                {
                  id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                  firstName: "Daphney",
                  lastName: "Torphy",
                  email: "Ron61@hotmail.com",
                  jobTitle: "National Markets Officer",
                  usertName: "DaphneyTorphy96105",
                  avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                }
              ]
        }
    }

    /*TERCERO. Esta fase de montado se ejecuta una vez el componente se renderizó en el navegador y nos permite interactuar con el DOM o las otras APIs del navegador (geolocation, navigator, notificaciones, etc.).*/
    componentDidMount() {
        this.fetchData()

        this.intervalId = setInterval(this.fetchData, 5000) /*para que se actualice cada 5 segundos. va a poder estado de loading true y va a volver a llamr los datos, mediante la funcion fetchData*/
        /* intervalId es una variable que creamos con lo que devuelva setInterval, para luego usarla abajo en componentWillUnmount*/
    }

    componentWillUnmount() {
        clearInterval(this.intervalId) /*cuando salimos de la página, clearInterval deshace el intervalo que creamos en componentDidMount*/
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
            
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    /*SEGUNDO. En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente*/
    render() {

        if (this.state.loading === true && !this.state.data) { /*renderizará cuando el loading sea true y NO haya datos, es decir, esto se hará una vez al inicio de la página*/
            // return 'Loading ...'
            return <PageLoading/>
        }

        if (this.state.error) {
            return <PageError error={this.state.error}/>
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges_conf-logo"
                                src={confLogo}
                                alt="Conf Logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                        New Badge
                        </Link>
                    </div>

                <BadgesList badges={this.state.data} />

                {this.state.loading && <MiniLoader/>}

                </div>
            </React.Fragment>
                
        )
    }
}

export default Badges