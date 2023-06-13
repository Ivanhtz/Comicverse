import users from '../../data/user';
import "./Users.css";
import { Link, useParams } from "react-router-dom"

const User = () => {

    let { id } = useParams();
    let user = users.find(u => u.id == id);


    return (
        <>
            <article className="card center" key={user.id}>
                <img src={user.image} alt="Imagen de usuario" className="card-img" />
                <div className="card-content">
                    <h2 className="card-title">{user.name}</h2>
                    <p className="card-description">{user.description}</p>
                    <p className="card-email">{user.email}</p>
                </div>
                <Link to={`/usuarios`}>
                    <button className='usuariosButton'>Volver</button>
                </Link>
            </article>
        </>
    );
}

export default User;