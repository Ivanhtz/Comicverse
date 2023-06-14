import React, { Component } from 'react';

class UsersBackForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            image: '',
            description: '',
            email: ''
        };
    }

    componentDidMount() {

        const savedUsers = localStorage.getItem('userArray');

        if (!savedUsers) {
            const initialUsers = [];
            localStorage.setItem('userArray', JSON.stringify(initialUsers));
        }

        if (savedUsers) {
            this.setState({ newsArray: JSON.parse(savedUsers) });
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, image, description, email, newsArray } = this.state;

        const newUser = {
            name: name,
            image: image,
            description: description,
            email: email
        };

        const updatedUsersArray = [...newsArray, newUser];

        this.setState({ newsArray: updatedUsersArray });

        this.setState({
            name: '',
            image: '',
            description: '',
            email: ''
        });

        localStorage.setItem('userArray', JSON.stringify(updatedUsersArray));

    };

    render() {
        const { name, image, description, email } = this.state;

        return (
            <>
                <h2>
                    Agrega nuevo usuario
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Imágen:</label>
                        <input
                            type="text"
                            name="image"
                            value={image}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Descripción:</label>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </>
        );
    }
}

export default UsersBackForm;