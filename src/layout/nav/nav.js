import './nav.css';
import {Link} from 'react-router-dom';

function Nav(){
	return (
      <>
        <nav>
			<ul>
				<li>
					<Link to="/">Inicio</Link>
				</li>
				<li>
					<Link to="/login">Iniciar Sesion</Link>
				</li>
				<li>
					<Link to="/comics">Comics</Link>
				</li>
				<li>
					<Link to="/quienes-somos">Sobre nosotros</Link>
				</li>
				<li>
					<Link to="/contacto">Contacto</Link>
				</li>
			</ul>
		</nav>
      </>
    );
}

export default Nav;