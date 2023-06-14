import { Component } from "react";

class UsersBackForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            image: '',
            description: '',
            email: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = JSON.stringify(this.state);
        console.log(values);
    }

    render() {
        const { name, image, description, email } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Alta de Usuario Nuevo</label>
                    </p>
                    <p>
                        <label>Nombre</label>
                    </p>
                    <p>
                        <input name="nombre" type="text" value={name}
                            onChange={this.handleChange}>
                        </input>
                    </p>

                    <p>
                        <label>Imagen</label>
                    </p>
                    <p>
                        <input name="imagen" type="text" value={image}
                            onChange={this.handleChange}>
                        </input>
                    </p>

                    <p>
                        <label>Descripción</label>
                    </p>
                    <p>
                        <input name="descripcion" type="text" value={description}
                            onChange={this.handleChange}>
                        </input>
                    </p>

                    <p>
                        <label>Email</label>
                    </p>
                    <p>
                        <input name="email" type="email" value={email}
                            onChange={this.handleChange}>
                        </input>
                    </p>
                    <button type="submit">Enviar</button>
                </form>
            </>
        );
    }
}

export default UsersBackForm;