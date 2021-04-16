import React from 'react'

class BadgeForm extends React.Component {

// state = { firstName: '',
//           lastName: '',
//           email: '',
//           jobTitle: '',
//           usertName: '' } //para inicializar el state

    // handleChange = e => {
    //     //console.log({ valor: e.target.value, nombre: e.target.name })
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    handleClick = e => {
        console.log('Button was clicked')
    }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     console.log('button was submitted')
    //     console.log(this.state)
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            /*value={this.state.firstName} // antes tomaba el valor de este formulario (BadgeForm)*/
                            value={this.props.formValues.firstName} // ahora lo toma del formValues de BadgeNew
                            className="form-control" 
                            type="text" 
                            name="firstName" >
                        </input>
                    </div>      
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            value={this.props.formValues.lastName} 
                            className="form-control" 
                            type="text" 
                            name="lastName" >
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange} 
                            value={this.props.formValues.email} 
                            className="form-control" 
                            type="email" 
                            name="email" >
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange} 
                            value={this.props.formValues.jobTitle} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle" >
                        </input>
                    </div>
                    <div className="form-group">
                        <label>User Name</label>
                        <input 
                                onChange={this.props.onChange} 
                                value={this.props.formValues.usertName} 
                                className="form-control" 
                                type="text" 
                                name="usertName" >
                        </input>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">
                            Save
                    </button>
                    
                    {/* Si hay un error, entonces, mostrar mensaje de error: */}
                    {this.props.error && <p className="text-danger"> {this.props.error.message}</p>} 

                </form>
            </div>

        )
    }
}

export default BadgeForm