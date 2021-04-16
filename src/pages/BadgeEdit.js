import React from 'react'

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
//import Navbar from '../components/NavBar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading'
import api from '../api'

class BadgeEdit extends React.Component {
    state = {
    loading: true, 
    error: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        usertName: '',
    },
}

componentDidMount(){
    this.fetchData()
}

fetchData = async e => {
    this.setState({ loading: true, error: null})

    try {
        const data = await api.badges.read(this.props.match.params.badgeId)
        
        this.setState({loading: false, form: data})

    } catch(error) {
        this.setState({loading: false, error: error})
    }
}

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form, // si no se agrega esta linea, cada valor nuevo sobreescribe el anterior
                [e.target.name]: e.target.value,
            },
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({loading: true, error: null})

            try {
                await api.badges.update(this.props.match.params.badgeId,this.state.form)
                this.setState({loading: false})

                this.props.history.push('/badges')

            } catch (error) {
                this.setState({ loading: false, error: error })
            }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading/>
        }

        return (
            // React.Fragment es el quivalente a <div/>, con la ventaja que no se muestra al compilar la página y por tanto no se llena de tantos divs innecesarios.
             <React.Fragment> 
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                usertName={this.state.form.usertName || 'USER_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarURL="https://static.platzi.com/media/avatars/avatars/avilio.amador_e1aef778-e4b8-4417-a0dd-48e371f4ee3b.jpg"
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit} 
                                formValues={this.state.form}
                                error={this.state.error} 
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit