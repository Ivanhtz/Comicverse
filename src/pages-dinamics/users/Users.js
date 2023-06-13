import { Link } from 'react-router-dom';
import users from '../../data/user';
import './Users.css';
const { Component } = require("react");


class Users extends Component {

    render() {

        return (
            <section>
                <header>
                    <h1 className='titleUsers'>Lista de Usuarios</h1>
                </header>

                <div className='container'>
                    <div className="flexUsers">
                        {
                            users.map(user =>

                                <article className="card" key={user.id}>
                                    <img src={user.image} alt="Imagen de usuario" className="card-img" />
                                    <div className="card-content">
                                        <h2 className="card-title">{user.name}</h2>
                                        <p className="card-description">{user.description}</p>
                                        <p className="card-email">{user.email}</p>
                                    </div>
                                    <Link to={`/usuarios/${user.id}`}>
                                        <button className='usuariosButton'>Ver más</button>
                                    </Link>
                                </article>


                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Users;