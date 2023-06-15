import React, { Component } from 'react';

import UsersValidator from './UsersValidator/UsersValidator';

class UsersBackForm extends Component {

    constructor(props) {
        super(props);

        this.state = {

            userList: [], // Lista de usuarios

            values: {
                name: '',
                image: '',
                description: '',
                email: ''
            },
            validations: {
                name: [],
                image: [],
                description: [],
                email: []
            }
        };
    }




    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(
            {
                values: {
                    ...this.state.values,
                    [name]: value
                }
            }
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validateAll();

        if (!isValid) {
            return false;
        }

        const user = { ...this.state.values };
        const userList = JSON.parse(localStorage.getItem("userList") || "[]");

        userList.push(user);
        localStorage.setItem("userList", JSON.stringify(userList));

        console.log(userList);

    };

    validateAll = () => {

        const { name, image, description, email } = this.state.values;
        const validations = { name: "", image: "", description: "", email: "" };

        //Invocamos los validadores
        validations.name = this.validatedName(name);
        validations.image = this.validatedImage(image);
        validations.description = this.validatedDescription(description);
        validations.email = this.validatedEmail(email);


        //recuperamos los mensajes, filtramos por aquellos que su mensaje no este vacio
        //eso significa que tendrian un error
        const mensajesValidacion = Object.values(validations).filter(mensaje => mensaje.length > 0)
        //si tenemos algun mejase no es valido
        const isValid = !mensajesValidacion.length;
        //si no es valido lo mandamos para el estado
        if (!isValid) {
            this.setState({
                validations
            });
        }
        return isValid;
    }


    validatedName = (name) => {
        const validatorName = new UsersValidator(name);

        return validatorName
            .isNotEmpty("El nombre es obligatorio")
            .isLength(4, 50, "La longitud debe estar entre 4 y 50 caracteres")
            .result;

    }

    validatedImage = (image) => {
        const validatorImage = new UsersValidator(image);

        return validatorImage
            .isNotEmpty("La url de la imagen es obligatoria")
            .isLength(10, 250, "La longitud debe estar entre 80 y 250 caracteres")
            .result;

    }


    validatedDescription = (description) => {
        const validatorDescription = new UsersValidator(description);

        return validatorDescription
            .isNotEmpty("La descripción es obligatoria")
            .isLength(10, 280, "La longitud debe estar entre 10 y 280 caracteres")
            .result;

    }


    validatedEmail = (email) => {
        const validatorEmail = new UsersValidator(email);

        return validatorEmail
            .isNotEmpty("Email obligatorio")
            .isEmail("Debe tener un formato email")
            .result;

    }

    render() {
        const { name, image, description, email } = this.state.values;
        const {
            name: nameVal,
            image: imageVal,
            description: descriptionVal,
            email: emailVal
        } = this.state.validations

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
                    <p>{nameVal}</p>

                    <div>
                        <label>Imágen:</label>
                        <input
                            type="text"
                            name="image"
                            value={image}
                            onChange={this.handleChange}
                        />
                    </div>
                    <p>{imageVal}</p>

                    <div>
                        <label>Descripción:</label>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <p>{descriptionVal}</p>

                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <p>{emailVal}</p>
                    <button type="submit">Enviar</button>
                </form>
            </>
        );
    }
}

export default UsersBackForm;